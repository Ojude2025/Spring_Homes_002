import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const id = 1; // Define the blog id to delete
const blogTable = '[data-testid="all-blogs-container"]';
const blogRow = (id) => `[data-testid="blog-row-${id}"]`;
const blogTitle = (id) => `[data-testid="blog-title-${id}"]`;
const blogAction = (id) => `[data-testid="blog-actions-${id}"]`;
const deleteIcon = (id) => `[data-testid="delete-blog-${id}"]`;

Given("I am on the Blog post", () => {
  cy.get('[data-testid="menu-blog"]');
  cy.url().should("include", "/blog/all");
});

And("have selected a blog content", () => {
  cy.get('[data-testid="blog-submenu"]').click();
  cy.get('[data-testid="submenu-all-blogs"]').click();
  cy.get(blogTable).should("exist").and("be.visible");
  cy.get(blogRow(id)).should("exist").and("be.visible");
  cy.get(blogTitle(id)).click();
  cy.get(blogAction(id)).should("exist").and("be.visible");
});

When("I click on delete", () => {
  cy.get(deleteIcon(id)).click();
});

Then("I can delete a blog content that is unwanted on the website", () => {
  cy.get(blogRow(id)).should("not.exist");
  cy.url().should("include", "/blog/all");
});
