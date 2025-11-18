/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach("This is the before hook", () => {
    cy.visit('https://cypress-course-apps-signup.vercel.app/');
  });

  it('Test signup with valid credentials', () => {
    cy.signUpWithValidCred();
  });
  // it('Test signup with valid credentials', () => {
  //   cy.signUpWithInvalidCred();
  // });

  // it('Test 2', () => {
  //   cy.visit('https://cypress-course-apps-signup.vercel.app/');

  //   cy.get('#email-id').type('weektwolesson@gmail.com');
  //   cy.get('.password').type('password@123');
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