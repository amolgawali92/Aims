#We need to install requests package through-->>> Settings-->ProjectIntrpreter
import time

import requests
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("http://www.deadlinkcity.com/")
driver.maximize_window()
allLinks=driver.find_elements(By.TAG_NAME,'a')
count=0

for link in allLinks:
    url=link.get_attribute('href')
    try:
        res=requests.head(url)
    except:
        None

        if res.status_code>=400:
            print(url,"  Is Broken Link")
            count+=1
        else:
            print(url,"  Is valid Link")
            print("Total Number Of Broken Links:",count)

            #time.sleep()
            #driver.quit()


