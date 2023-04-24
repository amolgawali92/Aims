import time

from selenium import webdriver

def headless_edge():
    from selenium.webdriver.edge.service import Service
    serv_obj=Service("C:\Drivers\msedgedriver.exe")
    ops=webdriver.edgeOptions()
    ops.headless=True
    driver=webdriver.edge(service=serv_obj,options=ops)
    return driver




driver=headless_edge()

driver.get("https://demo.nopcommerce.com/")
print(driver.title)
print(driver.current_url)

time.sleep(5)

driver.close()
