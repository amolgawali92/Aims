import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.implicitly_wait(5)
driver.get("https://itera-qa.azurewebsites.net/home/automation")
driver.maximize_window()

#1) select specific checkboxes

#driver.find_element(By.XPATH,"//input[@id='monday']").click()

#2) select all the checkboxes

checkboxes=driver.find_elements(By.XPATH,"//input[@type='checkbox' and contains(@id,'day')]")
print(len(checkboxes))

#Approach1
#for i in range(len(checkboxes)):           #(Use Index variable 'I' represents the index)
    #checkboxes[i].click()

#Approach2
for checkbox in checkboxes:
    checkbox.click()

#3)select multiple checkboxes by choice

#for checkbox in checkboxes:
   # weekname=checkbox.get_attribute('id')
    #if weekname=='monday' or weekname=='saturday' or weekname=='thursday':
        #checkbox.click()

#4)select last 3 checkboxes
#range(4,7)--->5,7
#totalnumberofelements-3=starting index

#for i in range(len(checkboxes)-3,len(checkboxes)):
    #checkboxes[i].click()

#5) select first 2 checkboxes

#for i in range(len(checkboxes)):
    #if i<2:
        #checkboxes[i].click()


time.sleep(5)
#6) clearing all the checkboxes

for checkbox in checkboxes:
    if checkbox.is_selected():
        checkbox.click()




time.sleep(5)
driver.quit()
