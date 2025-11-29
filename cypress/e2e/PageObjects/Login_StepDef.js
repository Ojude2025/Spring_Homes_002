import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { baseUrl } from "../index";

const email = "stephen@almondcareers.com"
const password = "Test1234"

Given("I visit the login page", () => {
  cy.visit(`${baseUrl}`);
});

When("I enter valid credentials", () => {
  cy.get('[data-testid="input-email"]').type(email);
  cy.get('[data-testid="input-password"]').type(password);
});

And("I click the login button", () => {
  cy.get('[data-testid="signin-submit-button"]').click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should('include', '/admin-dashboard');
});
