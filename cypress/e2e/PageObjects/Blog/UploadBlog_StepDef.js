import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { baseUrl } from "../index";

const email = "stephen@almondcareers.com"
const password = "Test1234"
const uploadBtn = '[data-testid="upload-button"]';
var titleText = "Can visitors bring board games for residents?"
var textbody = "Yes, board games are very good for residents"

beforeEach(() => {
  cy.visit(`${baseUrl}`);
  cy.get('[data-testid="input-email"]').type(email);
  cy.get('[data-testid="input-password"]').type(password);
  cy.get('[data-testid="signin-submit-button"]').click();
  cy.url().should('include', '/admin-dashboard');
});


Given("I am on the Blog Page", () => {
  cy.url().should("include", "/blog/all");
});

When("I click on upload Blog", () => {
  cy.get('[data-testid="blog-submenu"]');
  cy.get('[data-testid="submenu-create-blogs"]').click();
  cy.url().should("include", "/blog/create");
  cy.get('[data-testid="blog-title-input"]').clear().type(titleText);
  cy.get('[data-testid="image-container"]').should('exist').and('be.visible');
  cy.get('[data-testid="uploaded-image"]')
    .should('have.attr', 'alt', 'Uploaded image')
    .and('be.visible');
  cy.get('[data-testid="media-text"]')
    .should('be.visible')
    .and('have.text', text);
  cy.get(uploadBtn).click();
  cy.get(uploadBtn).selectFile('cypress/fixtures/sample.jpg', {action: 'select',});
  cy.get('[data-testid="blog-content-textarea"]').clear().type(textbody);
  cy.get('[data-testid="preview-cancel-button"]').click();
  cy.get('[data-testid="save-draft-button"]').click();
  cy.get('[data-testid="publish-button"]').should('not.be.disabled').click();
});

Then("I can be able to upload new blog to the website", () => {
  cy.url().should("include", "/blog/all");
});
