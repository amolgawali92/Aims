#Test Case
#--------------
# 1) Open Web Browser (Chrome/Firefox/Edge)
# 2) Open URL
# 3) Enter Username     (Admin)
# 4) Enter Password     (admin123)
# 5) Click on Login
# 6) Capture Title of the home page (Actual Title)
# 7) Verify Title of the Page : OrangeHRM  (Expected)
# 8) Close Browser

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
driver.maximize_window()
driver.find_element(By.ID,"Email").clear()
driver.find_element(By.ID,"Email").send_keys("admin@yourstore.com")
driver.find_element(By.ID,"Password").clear()
driver.find_element(By.ID,"Password").send_keys("admin")
driver.find_element(By.CLASS_NAME,"button-1").click()
navigation=driver.find_elements(By.CLASS_NAME,"nav-item")
print(len(navigation))
links=driver.find_elements(By.TAG_NAME,"a")
print(len(links))
driver.close()
