Feature: Application Login

@SanityTest
Scenario: Home page default login
Given User is on  netbanking landing page
When User login into application with "jin" and password "123456"
Then Home page is populated
And  Cards are displayed "true"