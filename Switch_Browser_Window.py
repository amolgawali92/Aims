import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)

driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
driver.maximize_window()
time.sleep(5)
#windowid=driver.current_window_handle
#print(windowid)    #current window id CF075722D853EB797CE356CA9E2F7CFD


driver.find_element(By.LINK_TEXT,"OrangeHRM, Inc").click()
windowsIDs=driver.window_handles

#Approach-1----If you have only 2-3 browser window you can do this.
parentwindowid=windowsIDs[0]
childwindowid=windowsIDs[1]

#print(parentwindowid,childwindowid)
#driver.switch_to.window(childwindowid)
#print("Title of the child window",driver.title)

#driver.switch_to.window(parentwindowid)
#print("Title of the parent window",driver.title)


#Approach-2--for multiple Browser Windows.
#for winid in windowsIDs:
  #  driver.switch_to.window(winid)
   # print(driver.title)


#Based on Your Choice close Specific browser windows
time.sleep(3)
for winid in  windowsIDs:
    driver.switch_to.window(winid)
if driver.title=="rangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM" or driver.title=='XYZ':
   driver.close()