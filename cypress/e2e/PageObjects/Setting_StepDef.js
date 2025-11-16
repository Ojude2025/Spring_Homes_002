import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { dashboardUrl } from "../index";

Given("I am on the dashboard page", () => {
  cy.visit(`${dashboardUrl}`);
});

When("I select the Setting option from the select option", () => {
  cy.get("select").select("Settings");
});

And("I get redirected to the Setting page", () => {
  cy.url().should("include", "/settings");
});

When(`I click on the "Back to Dashboard" back button`, () => {
  cy.get("#back-to-dashboard-settings").click();
});

Then("I should be redirected to the dashboard page", () => {
  cy.url().should("include", "/dashboard");
});
