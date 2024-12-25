describe('Address Filling', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
    })
    it('Address Filling', () => {
        cy.visit('https://recruitment-staging-queenbee.paradev.io/login')
        //removing modal
        cy.get('#chakra-modal--header-1').find('svg').click()
        //login
        cy.get('#page-login__tabs-number__input-number').type('82113467339')
        cy.get('#page-login__tabs-email__input-password').type('Deracloix7!')
        cy.get('#page-login__button-login').click()
        cy.wait(2000)
        //fill the address data
        cy.get('.chakra-link').should('have.text', 'Isi Alamat').click()
        cy.wait(2000)
        cy.get('.styles_empty-state__container__kZgWK > .chakra-button').click()
        cy.get('#add-address__label-text').type('rumah saya', { force: true })
        cy.get('#add-address__receiver-name').type('Raihan')
        cy.get('#add-address__receiver-number').type('082113467339')
        cy.get('.css-p9tl2f-control > .css-hlgwow').click()
        cy.get('#react-select-2-option-0').click()
        cy.get('.styles_container__QhpRo > :nth-child(4) > :nth-child(2)').click()
        cy.get('#react-select-3-option-0').click()
        cy.get(':nth-child(5) > [style="margin-right: 16px;"]').click()
        cy.get('#react-select-4-option-0').click()
        cy.get('.styles_container__QhpRo > :nth-child(5) > :nth-child(2)').click()
        cy.get('#react-select-5-option-0').click()
        cy.get('#add-address__receiver-full-address').type("alamat saya adalah ini")
        cy.get('.chakra-checkbox__control').click()
        cy.get('#add-address__submit-button').click()
    })
})