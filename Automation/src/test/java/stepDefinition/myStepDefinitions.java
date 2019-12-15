package stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import pageObjects.CheckoutPage;
import pageObjects.HomePage;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.testng.Assert;

import Cucumber.Automation.Base;

@RunWith(Cucumber.class)
public class myStepDefinitions extends Base{
	HomePage hp;
	CheckoutPage cp;

	@Given("^User is in GreenKart Landing page$")
	public void user_is_n_greenkart_landing_page() throws Throwable {
		driver = Base.getDriver();
	}

	@When("^User searched for (.+) Vegetable$")
	public void user_searched_for_something_vegetable(String strArg1) throws Throwable {
		hp = new HomePage(driver);
		hp.getSearch().sendKeys(strArg1);
		Thread.sleep(3000);
	}

	@Then("^\"([^\"]*)\" results are displayed$")
	public void something_results_are_displayed(String strArg1) throws Throwable {

		Assert.assertTrue(driver.findElement(By.cssSelector("h4.product-name")).getText().contains(strArg1));
	}
	

    @And("^added items to cart$")
    public void added_items_to_cart() throws Throwable {
    	
    	hp.getIncrement().click();
    	hp.getAddToCart().click();
    	Thread.sleep(3000);
    }

    @And("^User proceeded to Checkout page for purchase$")
    public void user_proceeded_to_checkout_page_for_purchase() throws Throwable {
    	
    	driver.findElement(By.xpath("//a[@class='cart-icon']//img[contains(@class,'')]")).click();
    
    	driver.findElement(By.xpath("//div[@class='action-block']"
    			+ "//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();
    
    }
    
    @Then("^verify selected (.+) items are displayed$")
    public void verify_selected_items_are_displayed(String name) throws Throwable {
    	
    	cp=new CheckoutPage(driver);
    	Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(name));

        
    }

    
    @Then("^verify selected (.+) items are displayed in Check out page$")
    public void verify_selected_items_are_displayed_in_check_out_page(String name) throws Throwable {
    
    	cp=new CheckoutPage(driver);
    	Assert.assertTrue( cp.getProductName().getText().contains(name));
    
    }



}