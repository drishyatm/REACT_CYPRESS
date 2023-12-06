import selectors from '../support/selectors.js';
import Men from '../support/men.js';
import Women from '../support/women.js';

const men = new Men();
const women = new Women();


describe('Shoping in Evershop', () => {

    beforeEach(function () {
        //base url before each function
        cy.visit('/')

    })

    context('Initial page Load', function () {
        it('Validate the title of the page', function () {
            //validate the title of the app and the menu

            cy.title().should('eq', 'Charka Nurture')
            cy.get(selectors.nav_menu).should('be.visible')
            cy.get(selectors.nav_menu).contains(men.male).should('be.visible')
            cy.get(selectors.nav_menu).contains(women.female).should('be.visible')

        })
    })
})

