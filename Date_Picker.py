import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://jqueryui.com/datepicker/")
driver.maximize_window()
time.sleep(5)

driver.switch_to.frame(0)    #Switch to Frame

#driver.find_element(By.XPATH,"//input[@id='datepicker']").send_keys("02/27/2023")

#OR

year="2021"
month="May"
date="21"

driver.find_element(By.XPATH,"//input[@id='datepicker']").click()  #opens datepicker

while True:
    mon=driver.find_element(By.XPATH,"//span[@class='ui-datepicker-month']").text
    yr=driver.find_element(By.XPATH,"//span[@class='ui-datepicker-year']").text

    if mon==month and yr==year:
        break;
    else:
        #driver.find_element(By.XPATH,"//span[@class='ui-icon ui-icon-circle-triangle-e']").click()  #next arrow
        driver.find_element(By.XPATH,"//span[@class='ui-icon ui-icon-circle-triangle-w']").click()   #previous arrow--Old date


#select date..

dates=driver.find_elements(By.XPATH,"//div[@id='ui-datepicker-div']//table/tbody/tr/td/a")
for ele in dates:
    if ele.text==date:
        ele.click()
        break


time.sleep(5)



