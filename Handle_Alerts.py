import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("https://the-internet.herokuapp.com/javascript_alerts")
driver.find_element(By.XPATH,"//button[normalize-space()='Click for JS Prompt']").click()


alertwindow=driver.switch_to.alert

#Three methods are used to handle Alerts/Popups
#myalert=driver.switch_to.alert
#1)myalert.text
#2)myalert.accept()
#3)myalert.dismiss()

print(alertwindow.text)
alertwindow.send_keys("I")
time.sleep(5)
alertwindow.accept()  # Close alert window by using OK Button

time.sleep(5)
driver.quit()
