package Cucumber.Automation;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	
	public static WebDriver driver;
	
	public static WebDriver getDriver() throws IOException {
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream("/Users/mangalajanardhana/eclipse-workspace/Automation/src/test/java/Cucumber/Automation/global.properties");
		prop.load(fis);
		
		System.setProperty("webdriver.chrome.driver", 
				"./drivers/chromedriver");
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		return driver;
	}
	

}
