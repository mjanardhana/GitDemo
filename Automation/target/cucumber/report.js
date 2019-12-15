$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for Vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@seleniumtest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in GreenKart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for \u003cName\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected \u003cName\u003e items are displayed in Check out page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 17,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 18,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 19,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3"
    },
    {
      "cells": [
        "Cauliflower"
      ],
      "line": 20,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@seleniumtest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in GreenKart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for Brinjal Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Brinjal items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "myStepDefinitions.user_is_n_greenkart_landing_page()"
});
formatter.result({
  "duration": 6750102951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "myStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3192443634,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 3157448754,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 116598348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "myStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 27466261,
  "status": "passed"
});
formatter.after({
  "duration": 81826627,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@seleniumtest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in GreenKart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for Beetroot Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Beetroot items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "myStepDefinitions.user_is_n_greenkart_landing_page()"
});
formatter.result({
  "duration": 8070530075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "myStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3204072541,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 3144016744,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 107384728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "myStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 21785985,
  "status": "passed"
});
formatter.after({
  "duration": 78691474,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@seleniumtest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in GreenKart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for Cauliflower Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Cauliflower items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "myStepDefinitions.user_is_n_greenkart_landing_page()"
});
formatter.result({
  "duration": 6030026924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cauliflower",
      "offset": 18
    }
  ],
  "location": "myStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3250733459,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 3147872366,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 111066312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cauliflower",
      "offset": 16
    }
  ],
  "location": "myStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 23050518,
  "status": "passed"
});
formatter.after({
  "duration": 81110121,
  "status": "passed"
});
});