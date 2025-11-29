import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { baseUrl } from "../index";

const email = "stephen@almondcareers.com"
const password = "Test1234"
const faqQstn = id => `[data-testid="faq-question-${id}"]`;
const faqOptions = id => `[data-testid="faq-more-options-${id}"]`;
const faqAction = id => `[data-testid="faq-actions-${id}"]`;
const faqDropdownMenu = id => `[data-testid="faq-dropdown-menu-${id}"]`;
const deleteIcon = id => `[data-testid="faq-delete-${id}"]`;
const faqRow = id => `[data-testid="faq-row-${id}"]`;

beforeEach(() => {
  cy.visit(`${baseUrl}`);
  cy.get('[data-testid="input-email"]').type(email);
  cy.get('[data-testid="input-password"]').type(password);
  cy.get('[data-testid="signin-submit-button"]').click();
  cy.url().should('include', '/admin-dashboard');
});

Given("I am on the FAQ page", () => {
  cy.url().should('include', '/settings/faq');
});

And("have selected a content", () => {
  cy.get(faqQstn(id));
  cy.get(faqAction(id));
});

When("I clcik on delete button", () => {
  cy.get(faqOptions(id));
  cy.get(faqDropdownMenu(id));
  cy.get(deleteIcon(id)).first().click();
  cy.url().should("include", "/settings/faq/edit-faq/{id}");
});

Then("I can successfully delete the content", () => {
  cy.get(faqRow(id)).should("not.exist");
  cy.url().should("include", "/settings/faq");
});
