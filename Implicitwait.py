from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)








driver.implicitly_wait(10)
driver.get("https://www.google.com/")
driver.maximize_window()
searchbox=driver.find_element(By.NAME,"q")
searchbox.send_keys("Java Tutorial")
searchbox.submit()
driver.find_element(By.XPATH,"//h3[text()='Java Tutorial'] ").click()
driver.quit()

