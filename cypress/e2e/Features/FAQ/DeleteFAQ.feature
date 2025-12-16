Feature: Delete FAQ functionality

@TagName
Scenario: Navigate to FAQ page and delete a selected FAQ content
  Given that I am on the FAQ page
  And have selected a content
  When I click on delete button
  Then I can successfully delete the content