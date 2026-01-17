import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const uploadBtn = '[data-testid="upload-button"]';
var titleText = "Can visitors bring board games for residents?";
var textbody = "Yes, board games are very good for residents";
var text = "Add image from device"; // Define the expected media text

Given("that I am on the Blog Page", () => {
  cy.url().should("include", "/admin-dashboard");
  // cy.get('[data-testid="menu-blog"]').click();
  // cy.url().should("include", "/blog/all");
});

When("I click on upload Blog", () => {
  // cy.get('[data-testid="menu-blog"]').click();

  cy.get('[data-testid="option-icon-blog"]').click();
  cy.get('[data-testid="submenu-create-blogs"]').click();
  cy.get('[data-testid="blog-title-input"]').clear().type(titleText);
  cy.get('[data-testid="upload-button"]').click();
  cy.get('input[type="file"]').selectFile('cypress/fixtures/website.jpg', { force: true });
  cy.get('[data-testid="blog-content-textarea"]').clear().type(textbody);
  
  // cy.wait(5000);
  // cy.get('[data-testid="blog-submenu"]');
  // cy.get('[data-testid="submenu-create-blogs"]').click();
  // cy.url().should("include", "/blog/create");
  // cy.get('[data-testid="blog-title-input"]').clear().type(titleText);
  // cy.get('[data-testid="image-container"]').should("exist").and("be.visible");
  // cy.get('[data-testid="uploaded-image"]').should("have.attr", "alt", "Uploaded image").and("be.visible");
  // cy.get('[data-testid="media-text"]').should("be.visible").and("have.text", text);
  // cy.get(uploadBtn).click();
  // cy.get(uploadBtn).selectFile("cypress/fixtures/sample.jpg", { action: "select" });
  // cy.get('[data-testid="blog-content-textarea"]').clear().type(textbody);
  // cy.get('[data-testid="preview-cancel-button"]');
  // cy.get('[data-testid="save-draft-button"]');
  // cy.get('[data-testid="publish-button"]').should("not.be.disabled").click();
});

Then("I can be able to upload new blog to the website", () => {
  cy.get('[data-testid="publish-button"]').should("not.be.disabled");
  cy.get('[data-testid="publish-button"]').click();
  cy.url().should("include", "/blog/all");
});
