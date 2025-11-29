import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faqUrl, baseUrl } from "../index";

const email = "stephen@almondcareers.com"
const password = "Test1234"

beforeEach(() => {
  cy.visit(`${baseUrl}`);
  cy.get('[data-testid="input-email"]').type(email);
  cy.get('[data-testid="input-password"]').type(password);
  cy.get('[data-testid="signin-submit-button"]').click();
  cy.url().should('include', '/admin-dashboard');
});

Given("I have accessed the FAQ page", () => {
  cy.url().should('include', '/settings/faq');
});

And("have selected a content", () => {
  cy.get('[data-testid="faq-question-{id})"]');
  cy.get('[data-testid="faq-actions-{id}}"]');
});

When("I clcik on edit", () => {
  cy.get('[data-testid="faq-more-options-{id}"]');
  cy.get('[data-testid="faq-dropdown-menu-{id}"]');
  cy.get('[data-testid="faq-edit-{id}"]').first().click();
  cy.url().should("include", "/settings/faq/edit-faq/{id}");
});

Then("I can successfully make the needed changes to the FAQ contents", () => {
  cy.get('[data-testid="edit-question-input"]').clear().type("text");
  cy.get('[data-testid="edit-answer-textarea"]').clear().type("textarea");
  cy.get('[data-testid="edit-faq-submit-button"]').clicl();
  cy.url().should("include", "/settings/faq");
});
