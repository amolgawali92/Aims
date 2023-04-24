import time

from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.implicitly_wait(5)

#driver.get("https://demo.nopcommerce.com/")
#driver.maximize_window()
#regLink=Keys.CONTROL+Keys.RETURN
#driver.find_element(By.LINK_TEXT,"Register").send_keys(regLink)



## New Tab-- Selenium-4  : Opens a new tab and Switches to new Tab...

driver.get("https://demo.nopcommerce.com/")
driver.switch_to.new_window('tab')
driver.get("https://www.cubedots.com/")



time.sleep(5)
driver.close()


