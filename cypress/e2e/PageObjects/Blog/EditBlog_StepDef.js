import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const id = "5558609b-18da-403a-913d-469452a3d9fd"; // Define the blog id to edit
const textareaSelector = '[data-testid="blog-content-textarea"]';
const saveBtn = '[data-testid="edit-save-button"]';
const blogView = (id) => `[data-testid="view-blog-${id}"]`;
var inputText = "Can visitors bring board games for residents?";
var expectedText = "Yes, board games are very good for residents and are very much encouraged.";


Given("that I am on the Blog page", () => {
  cy.url().should("include", "/admin-dashboard");
  cy.get('[data-testid="option-icon-blog"]').click();
});

When("I click on the edit blog", () => {
  cy.get('[data-testid="submenu-all-blogs"]').click();
  cy.get(blogView(id)).click();
  cy.contains('button', 'Edit').click();
  cy.get('[data-testid="create-blog-container"]');
});

Then("I can make changes where necessary", () => {
  cy.get('[data-testid="blog-title-input"]').clear().type(inputText);
  cy.get('input[type="file"]').selectFile('cypress/fixtures/website-image.jpg', { force: true});
  cy.get(textareaSelector).clear().type(expectedText);
  cy.get(saveBtn).click();
  cy.url().should("include", `/blog/${id}`);
});
