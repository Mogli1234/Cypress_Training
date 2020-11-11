/// <reference types="cypress" />
describe('Training Cypress Tests for stage 4',()=>{
    describe('Before Method to acces to the login page',()=>{
        beforeEach(()=>{
            cy.visit('http://trainingqa.avantica.avanticatec.net:3000/')
            cy.get('#Login_bto').click()
        })
    })

    it('Sing up Test',() => {
        const imageUpload = '602006.jpg'
        cy.get('.Signup-bto-page').click()
        cy.get('#file').should("be.visible").and("be.enabled").attachFile(imageUpload)
        cy.get('#firstname').should("be.visible").and("be.empty").type('ejemploPrimerNombre')
        cy.get('#lastname').should("be.visible").and("be.empty").type('ejemploApellidos')
        cy.get('#email').should("be.visible").and("be.empty").type(getRandomString(8)+'@gmail.com')
        cy.get('#username').should("be.visible").and("be.empty").type(getRandomString(8))
        cy.get('#phone').should("be.visible").and("be.empty").type('84815552')
        cy.get('#password').should("be.visible").and("be.empty").type('123456789')
        cy.get('#confirm').should("be.visible").and("be.empty").type('123456789')
        cy.get('.SignUp-bto').should("be.visible").and("be.empty").click()
        cy.get('#Login_bto').should("be.visible").and("be.empty").should('be.visible').click()
    })

    it('Login_Test_Correctly',() =>{
        cy.get('#email').should("be.visible").and("be.empty").type('jaime.esquivel@avantica.com')
        cy.get('#password').should("be.visible").and("be.empty").type('123456789')
        cy.get('.Login-bto').click()
        cy.get('#Login_bto').contains('LOGOUT')
    })
});

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}