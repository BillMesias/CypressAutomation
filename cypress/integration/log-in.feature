Feature: User logs in

Background: 
    Given User is in web staging

Scenario: User successfully log in
    When User enters correct credentials
    Then User should successfully log in

Scenario: Admin enters inccorect Username
    When User enters incorrect Username 
    Then User should unsuccessfully log in 

Scenario: User enters inccorect Password 
    When User enters incorrect Password 
    Then User should unsuccessfully log in

Scenario: User enters inccorect credentials
    When User enters incorrect credentials  
    Then User should unsuccessfully log in
