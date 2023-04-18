import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://www.amazon.com/amazonprime")
driver.get("https://www.snapdeal.com/")
time.sleep(5)
driver.back()
driver.forward()
driver.refresh()