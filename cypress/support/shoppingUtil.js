
import selectors from '../support/selectors.js';

export function validateShoppingPage(gender, urlKeyword) {
    // Click on the specified menu
    cy.get(selectors.nav_menu).contains(gender).click()

    // Validate URL and title
    cy.url().should('include', urlKeyword)
    cy.title().should('contain', gender)
}

export function findCheapestProduct() {
    let cheapestPrice = Infinity;
    let cheapestProduct = '';
    const prices = [];
    let minPrice;

    cy.get(selectors.product_list)
        .each(($product) => {
            const salePrice = parseFloat($product.find(selectors.sale_price).text().replace('$', ''));
            const regularPrice = parseFloat($product.find(selectors.regular_price).text().replace('$', ''));
            prices.push(...[salePrice, regularPrice].filter(price => !isNaN(price)));

            if ((!isNaN(salePrice) && (salePrice < cheapestPrice))) {
                cheapestPrice = salePrice;
                cheapestProduct = 'Sale Price';
            }
            if (!isNaN(regularPrice) && (regularPrice < cheapestPrice)) {
                cheapestPrice = regularPrice;
                cheapestProduct = 'Regular Price';
            }
        }).then(() => {
            minPrice = Math.min(...prices);
            if (cheapestPrice === minPrice) {
                cy.wrap(cheapestPrice).should('equal', minPrice);
                cy.wrap(cheapestProduct).should('be.oneOf', ['Sale Price', 'Regular Price']);
            } else {
                cy.log(`Minimum price does not match the Calculated Cheapest price!.Min Price is ${minPrice}`);
            }
            cy.log(`Adding product to cart with price in method of find minimum: ${cheapestPrice}, product type: ${cheapestProduct}`);
            return { cheapestPrice, cheapestProduct };
           
        });
    
}

export function addToCart(cheapestPrice, cheapestProduct) {
    cy.log(`Adding product to cart with price: ${cheapestPrice}, product type: ${cheapestProduct}`);
    cy.get(selectors.item_list)
        .contains(cheapestPrice)
        .parents(selectors.item_list)
        .find('a', 'href')
        .eq(0)
        .click()

    let count_size = 0
    cy.get(selectors.variant_options)
        .find('li').as('sizeoption')
        .each(($li) => {
            const optionText = $li.text();
            // Check if the list item contains one of the specified options
            if (optionText.match(/S|M|L|XL/)) {
                cy.log(`Found option: ${optionText}`);
                count_size++;

            }
        }).then(() => {
            cy.log(`Total count of options (S, M, L, XL): ${count_size}`);
            // Check if variants exist and select them
            if (count_size > 0) {
                cy.get('@sizeoption').first().click().wait(2000);

                if (count_size > 1) {
                    cy.get('@sizeoption').eq(count_size + 1).click().wait(2000);
                }
            }

            cy.contains('ADD TO CART').click().wait(2000);
            cy.contains('VIEW CART').click().wait(2000);
            //check the cart
            cy.url().should('include', '/cart');
            cy.contains('Order summary').should('be.visible')

            //validate the price added to cart
            let subtotal
            cy.contains('Sub total')
                .next('div')
                .invoke('text')
                .then((text) => {
                    subtotal = text.trim();
                });

            let total
            cy.get(selectors.total_value)
                .invoke('text')
                .then((text) => {
                    total = text.trim()

                }).as('cartTotal');
        });
}