package stepDefinition;



import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.DataTable;
import cucumber.api.junit.Cucumber;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefinitions {

    @Given("^User is on  netbanking landing page$")
    public void user_is_on_netbanking_landing_page() throws Throwable {

    	//code here
    	System.out.println("Login URL");
    
    }

    @When("^User login into application with username and password$")
    public void user_login_into_application_with_username_and_password() throws Throwable {
//code here
    	System.out.println("Login+Password+Submit");

    }

    @Then("^Home page is populated$")
    public void home_page_is_populated() throws Throwable {
//code here
    
    	System.out.println("Home Page has arrived");

    }

    @Then("^Cards are displayed$")
    public void cards_are_displayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    	System.out.println("Cards have arrived");

    }
    

    @When("^User login into application with \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_login_into_application_with_something_and_password_something(String strArg1, String strArg2) throws Throwable {

    	System.out.println(strArg1);
    	System.out.println(strArg2);

    	

    }
    
    @Then("^Cards are not displayed$")
    public void cards_are_not_displayed() throws Throwable {
    	System.out.println("Cards have NOT arrived");
    }
    
    
       
    
    @Then("^Cards are displayed \"([^\"]*)\"$")
    public void cards_are_displayed(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	System.out.println("Cards used the parameterised method: " + arg1);

    }
    
    @When("^User sign up with following details$")
    public void user_sign_up_with_following_details(DataTable data) throws Throwable {
    
    	List<List <String>> obj = data.raw();

    	System.out.println(obj.get(0).get(0));
    	System.out.println(obj.get(0).get(1));
    	System.out.println(obj.get(0).get(2));
    	System.out.println(obj.get(0).get(4));

    	
    
    }
    
    
    @When("^User login in to application with (.+) and  password (.+)$")
    public void user_login_in_to_application_with_and_password(String username, String password) throws Throwable {
       
    	System.out.println(username);
    	System.out.println(password);

    
    }


    @Given("^validate the browser$")
    public void validate_the_browser() throws Throwable {
    
    	System.out.println("URL IS good");
    
    }

    @When("^the browser is triggered$")
    public void the_browser_is_triggered() throws Throwable {
    	System.out.println("URL IS loading");

    
    }

    @Then("^check if browser is started$")
    public void check_if_browser_is_started() throws Throwable {
    
    	System.out.println("URL IS working");

    
    }




}

