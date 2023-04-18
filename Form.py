from telnetlib import EC

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
from urllib3.util import wait

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://www.orangehrm.com/")
driver.maximize_window()
driver.find_element(By.XPATH,"//input[@id='Form_getForm_action_submitForm']").click()
driver.implicitly_wait(10)
driver.find_element(By.ID,"Form_getForm_Name").send_keys("Aim")
driver.find_element(By.ID,"Form_getForm_Email").send_keys("aim@gmail.com")
driver.find_element(By.ID,"Form_getForm_Contact").send_keys("123456789")
#driver.find_element(By.XPATH,"Form_getForm_Country").click().sendkeys("India")
driver.find_element(By.CLASS_NAME,"recaptcha-checkbox-border").click()
driver.implicitly_wait(10)
driver.find_element(By.ID,"Form_getForm_action_submitForm").click()
driver.close()
