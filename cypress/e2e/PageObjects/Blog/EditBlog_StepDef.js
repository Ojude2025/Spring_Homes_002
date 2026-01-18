import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const id = "5558609b-18da-403a-913d-469452a3d9fd"; // Define the blog id to edit
const textareaSelector = '[data-testid="blog-content-textarea"]';
const uploadBtn = '[data-testid="upload-button"]';
// const cancelBtn = '[data-testid="preview-cancel-button"]';
const saveBtn = '[data-testid="edit-save-button"]';
// const blogAction = (id) => `[data-testid="blog-actions-${id}"]`;
const blogView = (id) => `[data-testid="view-blog-${id}"]`;
var inputText = "Can visitors bring board games for residents?";
var existingText = "Yes, board games are very good for residents and are encouraged.";
var expectedText = "Yes, board games are very good for residents and are very much encouraged.";
// var text = "Media Text"; // Define the expected media text

Given("that I am on the Blog page", () => {
  cy.url().should("include", "/admin-dashboard");
  cy.get('[data-testid="option-icon-blog"]').click();
  // cy.url().should("include", "/blog/all");
});

When("I click on the edit blog", () => {
  // cy.get('[data-testid="blog-submenu"]').click();
  cy.get('[data-testid="submenu-all-blogs"]').click();
  // cy.get(blogTitle(id)).click();
  // cy.get(blogAction(id));
  cy.get(blogView(id)).click();
  // cy.url().should("include", '/blog/${id}');
  cy.contains('button', 'Edit').click();
  cy.get('[data-testid="create-blog-container"]');
});

Then("I can make changes where necessary", () => {
  cy.get('[data-testid="blog-title-input"]').clear().type(inputText);
  // cy.get('[data-testid="image-container"]').should("exist").and("be.visible");
  // cy.get('[data-testid="uploaded-image"]').should("have.attr", "alt", "Uploaded image").and("be.visible");
  // cy.get('[data-testid="media-text"]').should("be.visible").and("have.text", text);
    cy.get('input[type="file"]').selectFile('cypress/fixtures/website-image.jpg', { force: true});
    // cy.get(uploadBtn).click(); 
    // cy.get(textareaSelector).should("exist").and("be.visible");
  cy.get(textareaSelector).clear().type(expectedText);
  // cy.get(textareaSelector).clear().type(expectedText);
  // cy.get('[data-testid="buttons-div"]').should("be.visible");
  // cy.get(cancelBtn).should("exist").and("be.visible").and("have.text", "Cancel");
  // cy.get(saveBtn).should("exist").and("be.visible").and("have.text", "Save");
  // cy.get(cancelBtn).click();
  // cy.url().should("not.include", "/editing");
  cy.get(saveBtn).click();
  // cy.contains("Saved").should("exist");
  // cy.url().should("include", "/blog/${id}");
  cy.url().should('include','/blog/all');
});
