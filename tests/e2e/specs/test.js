// https://docs.cypress.io/api/introduction/api.html

describe('Testing Live Chat Vue', () => {
  // it('Sign up new user', () => {
  //   cy.visit('/')
  //   cy.get('span').click()
  //   cy.get('[type="text"]').type('Yoshi')
  //   cy.get('[type="email"]').type('yoshi@yoshi.com')
  //   cy.get('[type="password"]').type('test123')
  //   cy.get('button').click()
  //   cy.get('nav > div > :nth-child(1)').should('be.visible')
  // });
  // it('Sending messages', () => {
  //   cy.visit('/chatroom')
  //   cy.get('textarea').type('lorem 30')
  //   cy.get('textarea').type('{enter}').trigger('input')
  //   cy.get('textarea').clear().type('vuel vuel x2')
  //   cy.get('textarea').type('{enter}').trigger('input')
  // });
  it('Logout', () => {
    cy.visit('/chatroom')
    cy.get('textarea').type('123456')
    cy.get('textarea').type('{enter}').trigger('input')
    cy.get('textarea').should('have.value', '')
    // cy.get('button').click()
    // cy.get('[type="email"]').should('be.visible')
  });
  // it('Login', () => {
  //   cy.visit('/')
  //   cy.get('[type="email"]').type('yoshi@yoshi.com')
  //   cy.get('[type="password"]').type('test123')
  //   cy.get('button').click()
  //   cy.get('nav > div > :nth-child(1)').should('be.visible')
  // });
})
