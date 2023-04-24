import time

from selenium import webdriver
from selenium.webdriver.common.by import By
import os  #for location path
location=os.getcwd()  #for location path

def chrome_setup():
    from selenium.webdriver.chrome.service import Service
    serv_obj=Service("C:\Drivers\chromedriver.exe")

    preferences={"download.default_directory":location}   #location used for file path
    ops=webdriver.ChromeOptions()
    ops.add_experimental_option("prefs",preferences)

    driver=webdriver.Chrome(service=serv_obj,options=ops)
    return driver

driver=chrome_setup()

time.sleep(3)

driver.get("https://file-examples.com/index.php/sample-documents-download/sample-doc-download/")
driver.maximize_window()
driver.find_element(By.XPATH,"//tr[@class='odd']//a[@class='btn btn-orange btn-outline btn-xl page-scroll download-button'][normalize-space()='Download sample DOCX file']").click()

time.sleep(5)

driver.close()