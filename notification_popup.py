import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service

ops=webdriver.ChromeOptions()
ops.add_argument("--disable-notifications") #disable the notifications popup

serv_obj=Service("C:\Drivers\chromedriver.exe")

driver=webdriver.Chrome(service=serv_obj,options=ops)

driver.get("https://www.gps-coordinates.net/my-location")
driver.maximize_window()
time.sleep(5)