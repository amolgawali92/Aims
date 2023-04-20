import time

from selenium import  webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("https://www.countries-ofthe-world.com/flags-of-the-world.html")
driver.maximize_window()

#1. Scroll down page by Pixel

#driver.execute_script("window.scrollBy(0,4000)","")
#value=driver.execute_script("return window.pageYOffset;")
#print("Number of Pixels moved:", value)

#2. Scroll down page till the element is Visible

#flag=driver.find_element(By.XPATH,"//img[@alt='Flag of Saudi Arabia']")
#driver.execute_script("arguments[0].scrollIntoView();",flag)
#value=driver.execute_script("return window.pageYOffset;")

#3. Scroll down page till end

driver.execute_script("window.scrollBy(0,document.body.scrollHeight)")
value=driver.execute_script("return window.pageYOffset;")
print("Number of Pixels moved:", value)

time.sleep(5)

# 4. Scroll up to Starting Position
driver.execute_script("window.scrollBy(0,-document.body.scrollHeight)")
value=driver.execute_script("return window.pageYOffset;")
print("Number of Pixels moved:", value)


time.sleep(5)
driver.close()

