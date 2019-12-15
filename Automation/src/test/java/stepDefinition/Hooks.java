package stepDefinition;

import Cucumber.Automation.Base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base{
	
	@Before("@mobileTest")
	public void beforeValidation() {
	
		System.out.println("Mobile before Hook");
	}

	
	@After("@seleniumtest")
	public void AfterSeleniumTest() {
	
		driver.close();	}

}

/* Common Interview Questions
 * 1. How to write and maintain reusable code across the framework?
- common step definition for test steps in multiple scenarios
With the help of step definition and regular expressions

2. How to data drive the data into TestCase?
use a data table concept helps to drive the data

3. How to parameterize the test cases with the multiple set of data
Scenario Outline

4. How to achieve 100% Test coverage through framework???

5. How to run all the tests with a single click?
- junit test runner

6. How to control the execution of test and to select and run only few based on needs
Tags in cucumber and mention the same in testrunner

7. How to implement logic to separate Test code from comon Post and Pre-requisities of the Test?
Hooks and Tags and in the case a common pre reqs for all the tests, use background

8. How to generate html, json and xml test reports?
'plugin' parameter in cumcumber options in test runner

 * 
 * 
 * */
