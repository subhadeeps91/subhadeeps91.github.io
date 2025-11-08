from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import time

# Set up Chrome WebDriver (make sure chromedriver is installed and in PATH)
service = Service("C:/Users/Admin/Documents/chromedriver-win64/chromedriver.exe")
driver = webdriver.Chrome(service=service)

# Open your GitHub Pages site
driver.get("https://subhadeeps91.github.io/")

# Wait for page to load
time.sleep(8)

# Check page title
print("Page Title:", driver.title)

# Example: Validate a header element (adjust selector as needed)
try:
    header = driver.find_element(By.TAG_NAME, "h1")
    print("Header Text:", header.text)
except:
    print("Header not found.")

# Close browser
driver.quit()
