/// <reference types="cypress" />

import * as helpF from './Helpers/randomString';

describe('Training Cypress Tests for stage 5', () => {

    beforeEach( () => {
        cy.visit('http://trainingqa.avantica.avanticatec.net:3000/login')
        cy.fixture('loginData').as('loginData')
    })

    it('Login_Test_Correctly', function () {
        cy.get('#email').type(this.loginData.email)
        cy.get('#password').type(this.loginData.password)
        cy.get('.Login-bto').click()
        cy.get('#Login_bto').should('be.visible').contains('LOGOUT')
    })

    it('Login_Test_Failed', () => {
        cy.get('#email').type(this.loginData.email)
        cy.get('#password').type(this.loginData.password)
        cy.get('.Login-bto').click()
        cy.get('#Login_bto').should('be.visible').contains('LOGOUT')
    })

    it.only('Login_Test_Correctly_using_fixture_alias', function () {
        cy.get('@loginData').then( function (user) {
            cy.get('#email').type(user.email)
            cy.get('#password').type(user.password)
        })
        cy.get('.Login-bto').click()
        cy.get('#Login_bto').should('be.visible').contains('LOGOUT')
    })

    it('Sing up Test', () => {
        cy.get('.Signup-bto-page').click()
        const imageUpload = '602006.jpg'
        cy.get('#file').attachFile(imageUpload)
        cy.get('#firstname').type('ejemploPrimerNombre')
        cy.get('#lastname').type('ejemploApellidos')
        cy.get('#email').type(helpF.getRandomString(8)+'@gmail.com')
        cy.get('#username').type(helpF.getRandomString(8))
        cy.get('#phone').type('84815552')
        cy.get('#password').type('123456789')
        cy.get('#confirm').type('123456789')
        cy.get('.SignUp-bto').click()
        cy.get('#Login_bto').should('be.visible').contains('LOGOUT')
    })
});

