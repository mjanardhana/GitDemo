Feature: Application Login

Background: 
Given validate the browser 
When the browser is triggered 
Then check if browser is started

@RegTest
Scenario: Home page default login
Given User is on  netbanking landing page
When User login into application with "jo" and password "falooda"
Then Home page is populated
And  Cards are displayed "true"
@mobileTest
Scenario: Home page default login
Given User is on  netbanking landing page
When User login into application with "jee" and password "mickey"
Then Home page is populated
And  Cards are displayed "false"
@mobileTest
Scenario: Home page default login
Given User is on  netbanking landing page
When User sign up with following details
| jenny  | abced | jenny@abcd.com   | Australia  | 203-314-2525 |
Then Home page is populated
And  Cards are displayed "false"
@RegTest
Scenario Outline: Home page default login
Given User is on  netbanking landing page
When User login in to application with <username> and  password <password>
Then Home page is populated
And  Cards are displayed "false"
Examples:
|username| password|
|  jenny | abced   |   
|tester1 | blah    |
|tester2 | bleh    |
