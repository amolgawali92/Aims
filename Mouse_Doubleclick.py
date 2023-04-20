import time

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
driver.maximize_window()


driver.switch_to.frame("iframeResult")  #switch to frame.
field1=driver.find_element(By.XPATH,"//input[@id='field1']")
field1.clear()
field1.send_keys("Hello Buddy's")

button=driver.find_element(By.XPATH,"//button[normalize-space()='Copy Text']")

act=ActionChains(driver)
act.double_click(button).perform()   #perform double click action

time.sleep(5)
driver.close()