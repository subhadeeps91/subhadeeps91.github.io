from selenium import webdriver
from selenium.webdriver.chrome.service import Service

service = Service("C:/Users/Admin/Documents/chromedriver-win64/chromedriver.exe")
driver = webdriver.Chrome(service=service)
driver.get("https://www.google.com")
print(driver.title)
driver.quit()
