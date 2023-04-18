from selenium import webdriver
from selenium.webdriver.chrome.service import Service
serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://www.cubedots.com/")
print(driver.title)
print(driver.current_url)
print(driver.page_source)
driver.close()
