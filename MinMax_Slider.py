import time
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
serv_obj=Service("C:\Drivers\chromedriver.exe")
driver=webdriver.Chrome(service=serv_obj)
driver.get("https://www.jqueryscript.net/demo/Price-Range-Slider-jQuery-UI/")
driver.maximize_window()

min_slider=driver.find_element(By.XPATH,"//span[1]")  #{'x': 545, 'y': 250}
max_slider=driver.find_element(By.XPATH,"//span[2]")  #{'x': 545, 'y': 250}
{'x': 545, 'y': 250}

print("Location Of Sliders Before Moving....")
print(max_slider.location)
print(max_slider.location)

act=ActionChains(driver)
time.sleep(3)

act.drag_and_drop_by_offset(min_slider,100,0).perform()
act.drag_and_drop_by_offset(max_slider,-50,0).perform()

print("Location of sliders after moving....")
print(min_slider.location)   #{'x': 161, 'y': 250}
print(max_slider.location)   #{'x': 496, 'y': 250}


time.sleep(5)
driver.close()
