Feature: Delete BLOG functionality

@TagName
Scenario: Navigate to BLOG page and delete a selected Blog content
  Given that I am on the Blog post
  And have selected a blog content
  When I click on delete
  Then I can delete a blog content that is unwanted on the website