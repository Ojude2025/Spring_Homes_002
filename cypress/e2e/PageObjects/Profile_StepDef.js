import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { dashboardUrl } from "../index";
("https://cypress-course-apps-signup.vercel.app/profile");

Given("I am on the dashboard page", () => {
  cy.visit(`${dashboardUrl}`);
});

When("I click the profile button", () => {
  cy.get("#profile-btn").click();
});
And("I get redirected to the profile page", () => {
  cy.url().should("include", "/profile");
});
And('I click on the "Back to Dashboard" button', () => {
  cy.get("#back-to-dashboard-profile").click();
});
Then("I should be redirected to the dashboard page", () => {
  cy.url().should("include", "/dashboard");
});
