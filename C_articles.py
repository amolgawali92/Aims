
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
serv_Obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_Obj)
driver.get("https://www.cubedots.com/blogs")
driver.maximize_window()
#driver.find_element(By.XPATH,"//a[@class='dropdown-item dropdownBlog active']").click()
driver.find_element(By.CLASS_NAME,"img-fluid").click()
driver.implicitly_wait(5)
driver.find_element(By.XPATH,"//*[name()='path' and contains(@d,'M34.1,47V3')]")
driver.implicitly_wait(5)
driver.find_element(By.XPATH,"//*[name()='path' and contains(@d,'M48,22.1c-')]")
driver.close()
