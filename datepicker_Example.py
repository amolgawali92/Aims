import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
driver.maximize_window()

driver.find_element(By.XPATH,"//input[@id='dob']").click()

datepicker_month=Select(driver.find_element(By.XPATH,"//select[@aria-label='Select month']"))
datepicker_month.select_by_visible_text("Jan")

datepicker_year=Select(driver.find_element(By.XPATH,"//select[@aria-label='Select year']"))
datepicker_year.select_by_visible_text("1992")

time.sleep(3)
alldates=driver.find_elements(By.XPATH,"//div[@id='ui-datepicker-div']//table/tbody/tr/td/a")

for date in alldates:
    if date.text=="21":
        date.click()
        break


time.sleep(3)
driver.close()