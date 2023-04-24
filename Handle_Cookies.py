import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("https://demo.nopcommerce.com/")
driver.maximize_window()

#Capture Cookies From The Browser
cookies=driver.get_cookies()
print("Size of Cookies", len(cookies))  #5 Cookies

#Print details of All Cookies
for c in cookies:
    print(c)


# Add a new cookie to the Browser

driver.add_cookie({"name":"MyCookie", "value":"1234678"})
cookies=driver.get_cookies()
print("Size of cookies after adding new One:",len(cookies))  #6

#Delete specific cookie from the browser

driver.delete_cookie("MyCookie")
cookies=driver.get_cookies()
print("Size of Cookies after Deleted One:",len(cookies))  #5,  After deleting one cookie..

#Delete All the Cookies..

driver.delete_all_cookies()
cookies=driver.get_cookies()
print("Size of cookies after deleting all the cookies:",len(cookies))

time.sleep(5)
driver.quit()