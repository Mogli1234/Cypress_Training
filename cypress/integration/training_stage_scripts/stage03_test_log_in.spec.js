/// <reference types="cypress" />
it('Login Test example',() =>{
    cy.visit('http://trainingqa.avantica.avanticatec.net:3000/')
    cy.wait(10000)
    cy.get('#Login_bto').click()
    cy.wait(5000)
    cy.get('#email').type('jaime.esquivel@avantica.com')
    cy.get('#password').type('123456789')
    cy.get('.Login-bto').click()
    cy.get('#Login_bto').contains('LOGOUT')
})

it('Sing up Test',() => {
    cy.visit('http://trainingqa.avantica.avanticatec.net:3000/')
    cy.get('#Login_bto').click()
    cy.wait(5000)
    cy.get('//a[href = "/singup"]').click()
})