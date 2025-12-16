Feature: Edit FAQ functionality

@TagName
Scenario: Navigate to FAQ page and edit a selected FAQ content
  Given that I have accessed the FAQ page
  And have selected a content
  When I click on edit 
  Then I can successfully make the needed changes to the FAQ contents