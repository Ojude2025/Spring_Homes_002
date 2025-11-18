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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('createAccount', () => {
//     cy.clickElement(sel.loginPage.account_button);
//     cy.get(sel.loginPage.login_button).should('exist').and('be.visible').contains('Register').click();
//     cy.Inputelement(sel.registerPage.first_name, faker.person.firstName());
//     cy.Inputelement(sel.registerPage.last_name, faker.person.lastName());
//     cy.Inputelement(sel.registerPage.email, faker.internet.email());
//     cy.Inputelement(sel.registerPage.phone, faker.phone.number());
//     cy.Inputelement(sel.registerPage.password, myPassword);
//     cy.Inputelement(sel.registerPage.conf_password, myPassword);
//     cy.clickElement(sel.registerPage.subscribe);
//     cy.clickElement(sel.registerPage.policy);
//     cy.clickElement(sel.registerPage.continue);
//     cy.verifyUrl('account/success');
// });

import { faker } from "@faker-js/faker";

Cypress.Commands.add('signUpWithValidCred', () => {
    cy.get('#email-id').should('be.visible').type(faker.internet.email());
    cy.get('.password').should('exist').type(faker.internet.password());
    cy.get('#check-me').check();
    cy.get('.btn-submit').click();
    cy.get('#dashboard-title').should('contain', 'Dashboard');
    cy.url().should('include', '/dashboard');
    cy.get('#menu-container').find('button').should('have.length', 4);
    cy.get('#logout-btn').click();
    cy.get('#homepage-title-id').should('be.visible').contains('Sign Up');
});

Cypress.Commands.add('signUpWithInvalidCred', () => {
    cy.get('#email-id').should('be.visible').type('');
    cy.get('.password').should('exist').type('');
    cy.get('.btn-submit').click();
});