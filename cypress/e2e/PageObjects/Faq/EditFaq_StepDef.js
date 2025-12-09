import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const id = 1; // Define the FAQ id to edit

Given("I have accessed the FAQ page", () => {
  cy.url().should("include", "/settings/faq");
});

And("have selected a content", () => {
  cy.get(`[data-testid="faq-question-${id}"]`);
  cy.get(`[data-testid="faq-actions-${id}"]`);
});

When("I click on edit", () => {
  cy.get(`[data-testid="faq-more-options-${id}"]`);
  cy.get(`[data-testid="faq-dropdown-menu-${id}"]`);
  cy.get(`[data-testid="faq-edit-${id}"]`).first().click();
  cy.url().should("include", `/settings/faq/edit-faq/${id}`);
});

Then("I can successfully make the needed changes to the FAQ contents", () => {
  cy.get('[data-testid="edit-question-input"]').clear().type("text");
  cy.get('[data-testid="edit-answer-textarea"]').clear().type("textarea");
  cy.get('[data-testid="edit-faq-submit-button"]').click();
  cy.url().should("include", "/settings/faq");
});
