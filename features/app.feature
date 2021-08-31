Feature: Pixelmatic QA Homework

  Background: Browser is open and application is launched
    Given the browser is open and application is launched

  @REQ-UI-01
  Scenario Outline: The Title should be "UI Testing Site" on every site
    And user clicks "<navigation>" button on navigation bar
    Then the user verifies page title
    Examples:
      | navigation |
      | Home       |
      | Form       |
      | UI Testing |
      | Error      |

  @REQ-UI-02
  Scenario Outline: The Company Logo should be visible on every site
    And user clicks "<navigation>" button on navigation bar
    Then the user verifies company logo
    Examples:
      | navigation |
      | Home       |
      | Form       |
      | UI Testing |



#  @REQ-UI-04 @REQ-UI-05 @REQ-UI-07 @REQ-UI-08 @REQ-UI-09
#  Scenario Outline: Check navigation buttons functionality
#    And user clicks "<navigation>" button on navigation bar
#    And user verify the text on page
#
#    Examples:
#      | navigation |
#      | Home       |
#      | Form       |
#      | Error      |
#      | UI Testing |
#
#  @REQ-UI-08
#  Scenario:The following text should be visible on the Home page in <h1> tag:"Welcome to Pixelmatic QA department"
#
#  @REQ-UI-09
#  Scenario: Verify welcome text on homepage
#
#  @REQ-UI-10
#  Scenario: Verify homepage <p> tag text
#
#  @REQ-UI-11
#  Scenario: Verify input form elements
#
#  @REQ-UI-12
#  Scenario: Verify input form functionality
#    And user clicks "form" button on navigation bar
#
#    Example:
#    |value   | result        |
#    |John    | Hello John!   |
#    |Sophia  | Hello Sophia! |
#    |Charlie | Hello Charlie!|
#    |Emily   | Hello Emily!  |

