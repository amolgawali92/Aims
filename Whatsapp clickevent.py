import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("https://agent-portal.cubedots.com/")
driver.maximize_window()

driver.find_element(By.ID,"amplify-id-:r1:").send_keys("")
driver.find_element(By.ID,"amplify-id-:r4:").send_keys("")
driver.find_element(By.XPATH,"//button[normalize-space()='Sign in']").click()
time.sleep(3)
driver.close()