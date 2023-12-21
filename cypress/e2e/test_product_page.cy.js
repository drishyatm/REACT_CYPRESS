import Men from '../support/men.js';
import Women from '../support/women.js';
import { validateShoppingPage, findCheapestProduct, addToCart } from '../support/shoppingUtil.js';

const men = new Men();
const women = new Women();
beforeEach(function () {
    //base url before each function
    cy.visit('/')

})
context('Shopping E2E Testing', function () {
    it('Validate the shopping page for women', function () {
        validateShoppingPage(women.female, women.url_women);        
        findCheapestProduct().then((result) => {            
            const { cheapestPrice, cheapestProduct } = result;
            cy.log(`Adding product to cart with price in product page: ${cheapestPrice}, product type: ${cheapestProduct}`);
            addToCart(cheapestPrice, cheapestProduct);
        });   
        
    });

    it('Validate the shopping page for men', function () {
        validateShoppingPage(men.male, men.url_men);
        findCheapestProduct().then((result) => {
            const { cheapestPrice, cheapestProduct } = result;
            cy.log(`Adding product to cart with price in product page: ${cheapestPrice}, product type: ${cheapestProduct}`);
            addToCart(cheapestPrice, cheapestProduct);
        });
    });
});