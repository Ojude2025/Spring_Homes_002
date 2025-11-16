import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I visit the login page", () => {
  cy.visit("https://cypress-course-apps-signup.vercel.app/");
});

When("I enter valid credentials", () => {
  cy.get("#email-id").type("test@example.com");
  cy.get(".password").type("Password123!");
});

And("I select the user and accept the terms and conditions", () => {
  cy.get("select").select("User");
  cy.get("#check-me").check();
});

And("I click the login button", () => {
  cy.get(".btn-submit").click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});
