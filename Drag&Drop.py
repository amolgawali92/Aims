import time

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
driver.maximize_window()

source_ele=driver.find_element(By.XPATH,"//div[@id='box6']")
target_ele=driver.find_element(By.XPATH,"//div[@id='box106']")


act=ActionChains(driver)
act.drag_and_drop(source_ele,target_ele).perform()

time.sleep(5)
driver.close()