import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let blogId = null; // Dynamic blog id extracted from the first blog item
const blogTable = '[data-testid="all-blogs-container"]';
const blogRow = (id) => `[data-testid="blog-row-${id}"]`;
const blogTitle = (id) => `[data-testid="blog-title-${id}"]`;
const blogAction = (id) => `[data-testid="blog-actions-${id}"]`;
const deleteIcon = (id) => `[data-testid="delete-blog-${id}"]`;

Given("that I am on the Blog post", () => {
  cy.url().should("include", "/admin-dashboard");
  cy.get('[data-testid="option-icon-blog"]').click()
});

And("have selected a blog content", () => {
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
    });
});

When("I click on delete", () => {
  // Click on the delete blog button
  cy.get(deleteIcon(blogId)).click();
});

Then("I can delete a blog content that is unwanted on the website", () => {
  cy.url().should("include", "/blog/all");
});
