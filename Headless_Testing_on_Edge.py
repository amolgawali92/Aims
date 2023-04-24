import time

from selenium import webdriver

def headless_Firefox():
    from selenium.webdriver.firefox.service import Service
    serv_obj=Service("C:\Drivers\geckodriver.exe")
    ops=webdriver.FirefoxOptions()
    ops.headless=True
    driver=webdriver.Firefox(service=serv_obj,options=ops)
    return driver




driver=headless_Firefox()

driver.get("https://demo.nopcommerce.com/")
print(driver.title)
print(driver.current_url)


driver.close()
