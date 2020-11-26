/// <reference types="cypress" />



describe('Training Cypress Tests for stage 6', () => {
    beforeEach(() => {
        cy.visit('http://trainingqa.avantica.avanticatec.net:3000/login')
        cy.fixture('stageData').as('loginData')
    })

    it('Login_Test_Correctly', function() {
        cy.get('@loginData').then( function (user) {
            cy.get('#email').type(user.email)
            cy.get('#password').type(user.password)
        })
        cy.get('.Login-bto').click()
        cy.get('#Login_bto').should('be.visible').contains('LOGOUT')
    })

    it.only('Sing up Test', () => {
        cy.get('.Signup-bto-page').click()
        cy.Singin_Up()
        cy.get('#Login_bto').should('be.visible').contains('LOGOUT')
    })
});

