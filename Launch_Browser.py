from selenium import webdriver
import time

browser = webdriver.Chrome(executable_path="C:\Drivers\chromedriver.exe")

browser.get("https://www.google.com")
browser.maximize_window()
