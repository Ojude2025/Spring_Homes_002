import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

var questionText = "Can visitors bring board games for residents?";
var answerText = "Yes, board games are very good for residents";

Given("I am on the website", () => {
  cy.url().should("include", "/admin-dashboard");
});

And("have accessed the FAQ feature", () => {
  cy.get('[data-testid="option-icon-settings"]').click();
  cy.get('[data-testid="submenu-faq"]').click();
  cy.url().should("include", "/settings/faq");
});

When("I click on the create button", () => {
  cy.get('[data-testid="add-faq-button"]').click();
  cy.url().should("include", "/settings/faq/add-faq");
});

And("input all the required details", () => {
  cy.get('[data-testid="question-input"]').clear().type(questionText);
  cy.get('[data-testid="answer-textarea"]').clear().type(answerText);
});

And("click save", () => {
  cy.get('[data-testid="add-faq-submit-button"]').click();
});

Then("I can be able to create new FAQ", () => {
  cy.url().should("include", "/settings/faq");
});
