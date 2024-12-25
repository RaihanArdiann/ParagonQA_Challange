describe('Shop', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.viewport(1920, 1080)
  })
  it('Shop', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/login')
    //removing modal
    cy.get('#chakra-modal--header-1').find('svg').click()
    //login
    cy.get('#page-login__tabs-number__input-number').type('82113467339')
    cy.get('#page-login__tabs-email__input-password').type('Deracloix7!')
    cy.get('#page-login__button-login').click()
    //search for collagen drink
    cy.get('.css-1hyoz7m > .chakra-button').click()
    cy.get('.icon-nav > ul > :nth-child(1)').click()
    cy.get('.chakra-input').type('Collagen drink{enter}')
    //add to chart
    cy.get('#add-to-cart-recomendation').click()
    cy.get('.HeaderQbee_total-cart__Acy0A').click()
    // cy.get('.chakra-editable').invoke('text').then((text) => {
    //   if (text.trim() !== '5') {
    //     cy.get('.chakra-editable').type('5');
    //   }
    // });
    cy.get('.chakra-editable').type('5')
    cy.get('.css-1pilj7v').click()
    cy.wait(2000)
    //checkout
    cy.get('.pickDelivery_pickDelivery-upper__gRRQ_').click()
    cy.get(':nth-child(2) > .pickDelivery_regular-delivery-content__9aYv_ > .pickDelivery_title-content__K_E9L > .pickDelivery_input-margin__Bg4Tr').click()
    cy.get(':nth-child(1) > .pickCourier_courier-label__6H8Aj > .pickCourier_title-content__dZgUS > input').click()
    cy.get('.style_promo-ticket-content__O35ux').click()
    cy.get('.style_input-promo-container__xV2HC').type('QRP-TEST-123')
    cy.get('.style_input-promo-container__xV2HC > .chakra-button').click()
    cy.get('.style_close-icon__IhcY7').find('svg').click()
    //payment
    cy.get('.checkoutSummary_checkout-total__A_3jU > .chakra-button').click()
    cy.get('#accordion-button-11').click()
    cy.get('#accordion-panel-11 > :nth-child(1) > :nth-child(1) > .col-10 > .chakra-text').click()
    cy.get('.chakra-input').type('82113467339')
    cy.get('.chakra-button').click()
  })
})