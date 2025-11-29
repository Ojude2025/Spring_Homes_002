import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { baseUrl } from "../index";


const email = "stephen@almondcareers.com"
const password = "Test1234"
var questionText = "Can visitors bring board games for residents?"
var answerText = "Yes, board games are very good for residents"

beforeEach(() => {
  cy.visit(`${baseUrl}`);
  cy.get('[data-testid="input-email"]').type(email);
  cy.get('[data-testid="input-password"]').type(password);
  cy.get('[data-testid="signin-submit-button"]').click();
  cy.url().should('include', '/admin-dashboard');
});

Given("I am on the website", () => {
  cy.url().should("include", "/admin-dashboard");
});

And("have accessed the FAQ feature", () => {
  cy.get('[data-testid="submenu-faq"]').click();
  cy.url().should("include", "/settings/faq");
});

When("I click on the create button", () => {
  cy.get('[data-testid="add-faq-button"]').click();
  cy.url().should("include", "/settings/faq/add-faq");
});

And("input all the required details", () => {
  cy.get('[data-testid="question-input"]')
    .clear().type(questionText);
  cy.get('[data-testid="answer-textarea"]')
    .clear().type(answerText);
});

And("click save", () => {
  cy.get('[data-testid="add-faq-submit-button"]').click();
});

Then("I can be able to create new FAQ", () => {
  cy.url().should("include", "/settings/faq");
  cy.get("table").should("contain.text", "Successfully created");
});
