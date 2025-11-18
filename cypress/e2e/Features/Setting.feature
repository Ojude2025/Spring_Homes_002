Feature: Setting functionality

@TagName
Scenario: Navigate to Setting page and back to dashboard
  Given I am on the dashboard page
  When I select the Setting option from the select option
  And I get redirected to the Setting page
  And I click on the "Back to Dashboard" back button
  Then I should be redirected to the dashboard page
