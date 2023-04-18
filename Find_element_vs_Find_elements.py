
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://demo.nopcommerce.com/register")

##### .........................find_element() -- returns single webelement

#1) Locator matching with single webelement

#element=driver.find_element(By.XPATH,"//input[@id='small-searchterms']")
#element.send_keys("Apple Macbook Pro 13-inch")

#2) Locator matching with multiple webelements
#element=driver.find_element(By.XPATH,"//div[@class='footer-upper']//a")
#print(element.text)    #print first link from the footer  "Sitemap"

#3) Element not available then throw NoSuchElementsException
#login_element=driver.find_element(By.LINK_TEXT,"Log")
#login_element.click()


### ...............................find_elements() - Returns multiple webelements

#1)Locator matching with single webelement
#elements=driver.find_elements(By.XPATH,"//input[@id='small-searchterms']")
#print(len(elements))
#print(elements[0].text)


#2) Locator matching with multiple webelements
#elements=driver.find_elements(By.XPATH,"//div[@class='footer-upper']//a")
#print(len(elements))
#print(elements[0].text)
#for ele in elements:
    #print(ele.text)


#3)Element not available
#elements=driver.find_elements(By.LINK_TEXT,"Log")
#print("elements returned:",len(elements))








