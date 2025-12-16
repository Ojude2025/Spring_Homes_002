import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const id = 8; // Define the FAQ id to edit
var EditQuestion = "Who can be in a Care Home?";
var EditAnswer = "Anyone who needs or require special care or wants to live out their years peacefully can be in a Care Home";

Given("that I have accessed the FAQ page", () => {
  cy.get('[data-testid="option-icon-settings"]').click();
  cy.get('[data-testid="submenu-faq"]').click();
  cy.url().should("include", "/settings/faq");
});

And("have selected a content", () => {
  cy.get(`[data-testid="faq-question-${id}"]`);
  cy.get(`[data-testid="faq-actions-${id}"]`);
});

When("I click on edit", () => {
  cy.get(`[data-testid="faq-more-options-${id}"]`).click();
  cy.get(`[data-testid="faq-dropdown-menu-${id}"]`);
  cy.get(`[data-testid="faq-edit-${id}"]`).first().click();
  cy.url().should("include", `/settings/faq/edit-faq/${id}`);
});

Then("I can successfully make the needed changes to the FAQ contents", () => {
  cy.get('[data-testid="edit-question-input"]').type(EditQuestion);
  cy.get('[data-testid="edit-answer-textarea"]').type(EditAnswer);
  cy.get('[data-testid="edit-faq-submit-button"]').click();
  cy.url().should("include", "/settings/faq");
});
