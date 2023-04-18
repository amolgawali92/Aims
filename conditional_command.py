from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://www.cubedots.com/")
driver.maximize_window()

#is_displayed()  is_enabled()

#searchbox=driver.find_element(By.XPATH,"//button[normalize-space()='Enroll Now']")
#print("Display status:",searchbox.is_displayed())
#print("Enabled status:",searchbox.is_enabled())

#is_selected()    for radio buttons and checkboxes

rb_check=driver.find_element(By.XPATH,"//input[@id='flexCheckDefault']")
print(rb_check.is_selected())
rb_check.click()
print("After selecting radio button...")
print(rb_check.is_selected())
driver.quit()
