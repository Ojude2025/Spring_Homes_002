import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let blogId = null; // Dynamic blog id extracted from the first blog item
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
  cy.url().should("include", "/blog/all");

  // Extract blog ID from the first blog item's data-testid attribute
  cy.get('[data-testid^="blog-title-"]')
    .first()
    .invoke("attr", "data-testid")
    .then((dataTestId) => {
      // Extract the UUID from the data-testid (format: blog-title-{UUID})
      blogId = dataTestId.replace("blog-title-", "");
      cy.log(`Extracted Blog ID: ${blogId}`);

      // Click on the view blog button
      cy.get(blogView(blogId)).click();
      cy.contains("button", "Edit").click();
      cy.get('[data-testid="create-blog-container"]');
    });
});

Then("I can make changes where necessary", () => {
  cy.get('[data-testid="blog-title-input"]').clear().type(inputText);
  cy.get('input[type="file"]').selectFile("cypress/fixtures/website-image.jpg", { force: true });
  cy.get(textareaSelector).clear().type(expectedText);
  cy.get(saveBtn).click();
  cy.url().should("include", `/blog/${blogId}`);
});
