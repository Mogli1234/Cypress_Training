/// <reference types="cypress" />



describe('Training Cypress Tests for stage 4',()=>{
    beforeEach(() => {
        cy.visit('http://trainingqa.avantica.avanticatec.net:3000/login')
    })

    before(function(){
        cy.fixture('loginData').then(function(loginData){
            this.loginData  = loginData;
        })
    })

    it('Login_Test_Correctly',function(){
        cy.get('#email').type(this.loginData.email)
        cy.get('#password').type(this.loginData.password)
        cy.get('.Login-bto').click()
        cy.get('#Login_bto').should('be.visible').contains('LOGOUT')
    })

    it('Sing up Test',() => {
        cy.get('.Signup-bto-page').click()
        const imageUpload = '602006.jpg'
        cy.Singin_Up('Jaime','Esquivel','123456789',imageUpload,'84815552')
        cy.get('#Login_bto').should('be.visible').contains('LOGOUT')
    })
});

