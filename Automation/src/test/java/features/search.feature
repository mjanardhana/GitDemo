Feature: Search and place order for Vegetables

@smokeTest
Scenario: Search for itms and validate results
Given User is in GreenKart Landing page
When User searched for Cucumber Vegetable
Then "Cucumber" results are displayed

@seleniumtest
Scenario Outline: Search for items and then move to checkout page
Given User is in GreenKart Landing page
When User searched for <Name> Vegetable
And added items to cart
And User proceeded to Checkout page for purchase
Then verify selected <Name> items are displayed in Check out page
Examples:
|Name         | 
| Brinjal     |   
| Beetroot    | 
| Cauliflower | 
