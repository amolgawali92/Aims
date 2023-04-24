import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
driver.maximize_window()

driver.find_element(By.XPATH,"//span[@id='select2-billing_state-container']").click()
time.sleep(5)
stateList=driver.find_elements(By.XPATH,"//ul[@id='select2-billing_state-results']/li")
print(len(stateList))

for state in stateList:
    if state.text=="Maharashtra":
        state.click()
        break

time.sleep(5)
driver.close()

