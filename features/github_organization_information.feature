Feature: Github organization information API
  Everybody wants to see the public information about an organization on GitHub

  Scenario: An anonymous user see public information about an organization
    # Given today is Sunday
    When I request Open Aquarium organization information
    Then I should see Open Aquarium public information
