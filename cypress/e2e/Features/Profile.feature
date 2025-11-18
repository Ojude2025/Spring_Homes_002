Feature: Profile functionality

@TagName
Scenario: Navigate to Profile page and back to dashboard
  Given I am on the dashboard page
  When I click the profile button
  And I get redirected to the profile page
  And I click on the "Back to Dashboard" button
  Then I should be redirected to the dashboard page