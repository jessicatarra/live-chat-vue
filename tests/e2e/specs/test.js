// https://docs.cypress.io/api/introduction/api.html

describe('Testing Live Chat Vue', () => {
  it('Sign up new user', () => {
    //visiting home page
    cy.visit('/')
    cy.get('span').click()
    cy.get('[type="text"]').type('matilde')
    cy.get('[type="email"]').type('matilde@matilde.com')
    cy.get('[type="password"]').type('test123')
    cy.get('button').click()

    //check if we actually login by looking for an element in chatroom page
    cy.get('nav > div > :nth-child(1)').should('be.visible')
  });

  it('Sending messages', () => {
    //visiting chatroom page
    cy.visit('/chatroom')

    //chat interaction
    cy.get('textarea').type('vamos que vamos')
    cy.get('textarea').type('{enter}')

    //check if the last message was send it
    cy.get('.messages').should(($messages) => {
      expect($messages.last()).to.contain('vamos que vamos')
    })

    //other message
    cy.get('textarea').clear().type('por supuesto que si')
    cy.get('textarea').type('{enter}')

    //check if the last message was send it
    cy.get('.messages').should(($messages) => {
      expect($messages.last()).to.contain('por supuesto que si')
    })
  
  });

  it('Logout', () => {
    //visiting chatroom page
    cy.visit('/chatroom')

    //chat interaction
    cy.get('textarea').type('test si')
    cy.get('textarea').type('{enter}')

    //check if the last message was send it
    cy.get('.messages').should(($messages) => {
      expect($messages.last()).to.contain('test si')
    })

    //logout
    cy.get('button').click()
    cy.get('[type="email"]').should('be.visible')
  });

  it('Login', () => {
    //visiting home page
    cy.visit('/')
    cy.get('[type="email"]').type('matilde@matilde.com')
    cy.get('[type="password"]').type('test123')
    cy.get('button').click()

    //check if we actually login by looking for an element in chatroom page
    cy.get('nav > div > :nth-child(1)').should('be.visible')
  });
})
