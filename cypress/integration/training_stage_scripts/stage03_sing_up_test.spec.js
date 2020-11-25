/// <reference types="cypress" />
describe('Training Cypress Tests stage 03',()=>{

    it('Sing up Test',() => {
        const imageUpload = '602006.jpg'
        cy.visit('http://trainingqa.avantica.avanticatec.net:3000/')
        cy.get('#Login_bto').click()
        cy.wait(5000)
        cy.get('.Signup-bto-page').click()
        cy.get('#file').attachFile(imageUpload)
        cy.get('#firstname').type('ejemploPrimerNombre')
        cy.get('#lastname').type('ejemploApellidos')
        cy.get('#email').type(getRandomString(8)+'@gmail.com')
        cy.get('#username').type(getRandomString(8))
        cy.get('#phone').type('84815552')
        cy.get('#password').type('123456789')
        cy.get('#confirm').type('123456789')
        cy.get('.SignUp-bto').click()
        cy.get('#Login_bto').should('be.visible').click()
    })

    it('Login_Test_Correctly',() =>{
        cy.visit('http://trainingqa.avantica.avanticatec.net:3000/')
        cy.wait(10000)
        cy.get('#Login_bto').click()
        cy.wait(5000)
        cy.get('#email').type('jaime.esquivel@avantica.com')
        cy.get('#password').type('123456789')
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