import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const id = 1; // Define the blog id to edit
const textareaSelector = '[data-testid="blog-content-textarea"]';
const uploadBtn = '[data-testid="upload-button"]';
const cancelBtn = '[data-testid="preview-cancel-button"]';
const saveBtn = '[data-testid="edit-save-button"]';
const blogTitle = (id) => `[data-testid="blog-title-${id}"]`;
const blogAction = (id) => `[data-testid="blog-actions-${id}"]`;
const blogView = (id) => `[data-testid="view-blog-${id}"]`;
var inputText = "Can visitors bring board games for residents?";
var expectedText = "Yes, board games are very good for residents";
var text = "Media Text"; // Define the expected media text

Given("I am on the Blog page", () => {
  cy.get('[data-testid="menu-blog"]');
  cy.url().should("include", "/blog/all");
});

When("I click on the edit blog", () => {
  cy.get('[data-testid="blog-submenu"]').click();
  cy.get('[data-testid="submenu-all-blogs"]').click();
  cy.get(blogTitle(id)).click();
  cy.get(blogAction(id));
  cy.get(blogView(id)).click();
  cy.url().should("include", "/blog/{id}");
  cy.get(".edit-btn").click();
  cy.get('[data-testid="create-blog-container"]');
});

Then("I can make changes where necessary", () => {
  cy.get('[data-testid="blog-title-input"]').type(inputText);
  cy.get('[data-testid="image-container"]').should("exist").and("be.visible");
  cy.get('[data-testid="uploaded-image"]').should("have.attr", "alt", "Uploaded image").and("be.visible");
  cy.get('[data-testid="media-text"]').should("be.visible").and("have.text", text);
  cy.get(uploadBtn).click();
  cy.get(uploadBtn).selectFile("cypress/fixtures/sample.jpg", { action: "select" });
  cy.get(textareaSelector).should("exist").and("be.visible");
  cy.get(textareaSelector).should("have.value", expectedText);
  cy.get(textareaSelector).type(inputText);
  cy.get('[data-testid="buttons-div"]').should("be.visible");
  cy.get(cancelBtn).should("exist").and("be.visible").and("have.text", "Cancel");
  cy.get(saveBtn).should("exist").and("be.visible").and("have.text", "Save");
  cy.get(cancelBtn).click();
  cy.url().should("not.include", "/editing");
  cy.get(saveBtn).click();
  cy.contains("Saved").should("exist");
  cy.url().should("include", "/blog/{id}");
});
