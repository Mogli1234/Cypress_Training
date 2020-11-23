// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import * as helpF from '../integration/training_stage_scripts/Helpers/randomString';

Cypress.Commands.add('Singin_Up',(firstname,lastname,password,profileImage,phone)=> {
    cy.get('#file').attachFile(profileImage)
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#email').type(helpF.getRandomString(8)+'@gmail.com')
    cy.get('#username').type(helpF.getRandomString(8))
    cy.get('#phone').type(phone)
    cy.get('#password').type(password)
    cy.get('#confirm').type(password)
    cy.get('.SignUp-bto').click()
})