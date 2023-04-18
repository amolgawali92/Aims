from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://demo.nopcommerce.com/register")
emailbox=driver.find_element(By.XPATH,"//input[@id='Email']")
emailbox.send_keys("abc@gmail.com")

print("result of text:", emailbox.text)   #printed nothing
print("result of get_attribute():",emailbox.get_attribute('value'))    # abc@gmail.com
