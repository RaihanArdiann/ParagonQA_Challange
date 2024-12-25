describe('Account Registration', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.viewport(1920, 1080)
  })
  it('registered Account', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/register')
    cy.get('#chakra-modal--header-1').find('svg').click()
    cy.get(':nth-child(2) > .chakra-radio__control').click()
    cy.get('.css-79elbk > .chakra-button').should('be.visible').and('not.be.disabled').click()
    cy.get('[style="margin-top: 2rem; margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input').type('raihan')
    cy.get('[style="margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input').type('82113467339')
    cy.get('.styles_flex-container__YCmn7 > :nth-child(2) > .chakra-input__group > .chakra-input').type('raihan.ardiann@gmail.com')
    cy.get('[style="margin: 16px 0px;"] > .chakra-input__group > .chakra-input').type('Ardiann7@')
    cy.get(':nth-child(3) > .chakra-button').and('not.be.disabled').click()
    cy.get('.styles_registered-enter-btn__exk6h').click()
  })
})