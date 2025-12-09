Feature: Create FAQ functionality

@TagName
Scenario: Navigate to FAQ page and create a new FAQ
  Given I am on the website
  And have accessed the FAQ feature
  When I click on the create button
  And input all the required details
  And click save
  Then I can be able to create new FAQ