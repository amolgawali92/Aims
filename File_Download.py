import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("https://file-examples.com/index.php/sample-documents-download/sample-doc-download/")

driver.maximize_window()

driver.find_element(By.XPATH,"//tr[@class='odd']//a[@class='btn btn-orange btn-outline btn-xl page-scroll download-button'][normalize-space()='Download sample DOCX file']").click()

time.sleep(5)
driver.close()
