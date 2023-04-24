## New Tab-- Selenium-4  : Opens a new browser Window and Switches to new Window...

import time

from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.implicitly_wait(5)

## New Window -- Selenium-4  : Opens a new browser Window and Switches to new Window...

driver.get("https://demo.nopcommerce.com/")
driver.switch_to.new_window('window')
driver.get("https://www.cubedots.com/")

time.sleep(5)
driver.close()
