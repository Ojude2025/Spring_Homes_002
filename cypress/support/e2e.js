// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Import base URL from index
const baseUrl = `http://ogc404gswg4oogcc0g088wsk.185.198.27.143.sslip.io`;

// Global beforeEach for all tests
beforeEach(() => {
  const email = "stephen@almondcareers.com";
  const password = "Test1234";

  cy.visit(baseUrl);
  cy.get('[data-testid="input-email"]').type(email);
  cy.get('[data-testid="input-password"]').type(password);
  cy.get('[data-testid="signin-submit-button"]').click();
  cy.url().should("include", "/admin-dashboard");
});
