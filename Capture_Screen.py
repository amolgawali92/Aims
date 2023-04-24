import os
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import os

serv_object=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_object)

driver.get("https://demo.nopcommerce.com/")
driver.maximize_window()


#Take a path from right click on folder and click on copy path reference
driver.save_screenshot("C:\\Users\\Adminit\\PycharmProjects\\Auto_Sele_Python\\Day1_Selenium\\captureimage.png")

#OR
#driver.save_screenshot(os.getcwd()+"captureimage.png")

#OR
#driver.get_screenshot_as_file(os.getcwd()+"\\captureimage.png")

#OR
#driver.get_screenshot_as_png()   #driver.get_screenshot_as_base64()   #Saves image in binary format..

time.sleep(5)
driver.close()