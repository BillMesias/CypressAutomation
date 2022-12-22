Feature: Admin logs in

Background: 
    Given Admin is in web staging

Scenario: Admin successfully log in
    When Admin clicks "Safer Gaming"
    Then Admin should see Safer Gaming page

Scenario: Admin sees Safer Gaming options 
    When Admin clicks "Safer Gaming" 
    And Admin clicks Safer Gaming button
    Then Admin should see Safer Gaming option
    |tab                  |
    |Home                 |
    |Understanding        |
    |Problem Gambling     |
    |Play Safe Tools      |
    |Social Responsibility|

Scenario: Admin sees Play Safe options 
    When Admin clicks "Safer Gaming" 
    And Admin clicks Play Safe button
    Then Admin should see Play Safe option
    |tab                |
    |Track Your Activity|
    |Limit Your Gaming  |
    |Budget Calculator  |
    |Time Out           |
    |Self Exclusion     |

# Scenario: Admin sees Support options 
#     When Admin clicks "Safer Gaming" 
#     And Admin clicks Support button
#     Then Admin should see Support option
#     |tab                 |
#     |Support & Tips      |
#     |Underage Gambling   |
#     |Helpful Organisation|

 Scenario: Admin sees Support options 
    When Admin clicks "Safer Gaming" 
    And Admin clicks Support button
    Then Admin should see Support & Tips
    And Admin should see Underage Gambling
    And Admin should see Helpful Organisations

Scenario: Admin open Help Centre
    When Admin clicks "Safer Gaming" 
    And Admin clicks Help Centre button
    Then Admin should see Help Centre page