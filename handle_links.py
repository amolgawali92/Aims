import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://demo.nopcommerce.com/")
driver.maximize_window()

#Click on link

#driver.find_element(By.LINK_TEXT,"Digital downloads").click()
#driver.find_element(By.PARTIAL_LINK_TEXT,"Digital down").click()


#find no.of links on a page

links=driver.find_elements(By.TAG_NAME,"a")
print("Total no of links:",len(links))

#print all the link name

for link in links:
    print(link.text)

time.sleep(5)
driver.quit()

