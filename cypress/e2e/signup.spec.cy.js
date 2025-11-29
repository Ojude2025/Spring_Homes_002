/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach("This is the before hook", () => {
    cy.visit('http://ogc404gswg4oogcc0g088wsk.185.198.27.143.sslip.io/');
  });

  it('Test signup with valid credentials', () => {
    cy.signUpWithValidCred();
  });
  // it('Test signup with valid credentials', () => {
  //   cy.signUpWithInvalidCred();
  // });

  // it('Test 2', () => {
  //   cy.visit('http://ogc404gswg4oogcc0g088wsk.185.198.27.143.sslip.io/');

  //   cy.get('#email-id').type('jude.okozi@gmail.com');
  //   cy.get('.password').type('Test1234');
  //   cy.get('#check-me').check();
  //   cy.get('.btn-submit').click();
  // });

  // it('Test 3', () => {
  //   cy.get('#email-id').type('weektwolesson@gmail.com');
  //   cy.get('.password').type('password@123');
  //   cy.get('#check-me').check();
  //   cy.get('.btn-submit').click();
  // });

  // it('Test 4', () => {
  //   cy.get('#email-id').type('weektwolesson@gmail.com');
  //   cy.get('.password').type('password@123');
  //   cy.get('#check-me').check();
  //   cy.get('.btn-submit').click();
  // });
});