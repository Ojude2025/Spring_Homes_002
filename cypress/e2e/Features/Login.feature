Feature: Login functionality

  @TagName
  Scenario: Successful login
    Given I visit the login page
    When I enter valid credentials
    And I select the user and accept the terms and conditions
    And I click the login button
    Then I should be redirected to the dashboard