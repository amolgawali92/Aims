#count no.of rows and columns
#Read specific row and Column data
#Read all the rows and Columns data
#Read data based on condition(List books name whose author is Mukesh)
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_Object=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_Object)
driver.get("https://testautomationpractice.blogspot.com/")
driver.maximize_window()

#1) count no.of rows and columns

noOfRows=len(driver.find_elements(By.XPATH,"//table[@name='BookTable']//tr"))
noOfColumns=len(driver.find_elements(By.XPATH,"//table[@name='BookTable']//tr[1]/th"))

time.sleep(5)
print("Total no.of Rows are", noOfRows)
print("Total no of Columns are",noOfColumns)

#2) Read specific row and Column data
data=driver.find_element(By.XPATH,"//table[@name='BookTable']/tbody/tr[5]/td[1]").text
print(data)

driver.close()
