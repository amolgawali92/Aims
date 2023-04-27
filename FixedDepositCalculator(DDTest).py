import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from Day1_Selenium import XLUtil     #self created module functions and Methods, you can just call using import


serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.implicitly_wait(10)

driver.get("https://www.moneycontrol.com/fixed-income/calculator/state-bank-of-india-sbi/fixed-deposit-calculator-SBI-BSB001.html?classic=true")
driver.maximize_window()

file="D:\Selenium\DDTesting.xlsx"
rows=XLUtil.getRowCount(file,"Data")

#Reading data from Excel...

for r in range(2,rows+1):
    pric=XLUtil.readData(file,"Data",r,1)
    rateofinterest=XLUtil.readData(file,"Data",r,2)
    per1 = XLUtil.readData(file,"Data", r, 3)
    per2 = XLUtil.readData(file, "Data", r, 4)
    fre = XLUtil.readData(file, "Data", r, 5)
    exp_mvalue = XLUtil.readData(file, "Data", r, 6)

    #Passing data to the Application

    driver.find_element(By.ID,"principal").send_keys(pric)
    driver.find_element(By.ID,"interest").send_keys(rateofinterest)
    driver.find_element(By.XPATH,"//input[@id='tenure']").send_keys(per1)
    perioddrp=Select(driver.find_element(By.XPATH,"//select[@id='tenurePeriod']"))
    perioddrp.select_by_visible_text(per2)
    frequencydrp=Select(driver.find_element(By.XPATH,"//select[@id='frequency']"))
    frequencydrp.select_by_visible_text(fre)

    driver.find_element(By.XPATH,'//*[@id="fdMatVal"]/div[2]/a[1]/img').click()
    act_mvalue=driver.find_element(By.XPATH,"//span[@id='resp_matval']/strong").text

    #Validation

    if float(exp_mvalue)==float(act_mvalue):
        print("test passed")
        XLUtil.writeData(file,"Data",r,8,"Passed")
        XLUtil.fillGreenColor(file,"Data",r,8)
    else:
        print("test failed")
        XLUtil.writeData(file,"Data",r,8,"Failed")
        XLUtil.fillRedColor(file,"Data",r,8)

    driver.find_element(By.XPATH,"//*[@id='fdMatVal']/div[2]/a[2]/img").click()








