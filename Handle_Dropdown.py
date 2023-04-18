import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://www.cubedots.com/")
driver.maximize_window()
driver.find_element(By.XPATH,"//div[@class='becomeOurPartnerBtnSection']//button").click()
driver.find_element(By.XPATH,"country")

time.sleep(5)
#drpcountry_ele=driver.find_element(By.XPATH,"//select[@id='input-country']")


#Select option from the dropdown

#drpcountry.select_by_value("10")  #Argentina
#drpcountry.select_by_visible_text("India")

#drpcountry.select_by_index(13)  #Index Value

# Capture all the options and print them

#alloptions=drpcountry.options
#print("Total number of options:",len(alloptions))

#for opt in alloptions:


#Select option from dropdown without using built-in method

for opt in alloptions:
    if opt.text=="India":
        opt.click()
        break

time.sleep()
driver.quit()
