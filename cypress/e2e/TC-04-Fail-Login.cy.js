describe('Login', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
    })
    it('Login', () => {
        cy.visit('https://recruitment-staging-queenbee.paradev.io/login')
        //removing modal
        cy.get('#chakra-modal--header-1').find('svg').click()
        //login
        cy.get('#page-login__tabs-number__input-number').type('082112161339')
        cy.get('#page-login__tabs-email__input-password').type('Deracloix*0')
        cy.get('#page-login__button-login').click()
    })
})