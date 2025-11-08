from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

# ✅ Set up Chrome options for mobile emulation
mobile_emulation = { "deviceName": "Galaxy S5" }
chrome_options = Options()
chrome_options.add_experimental_option("mobileEmulation", mobile_emulation)

# ✅ Using verified ChromeDriver path
service = Service("C:/Users/Admin/Documents/chromedriver-win64/chromedriver.exe")
driver = webdriver.Chrome(service=service, options=chrome_options)

# ✅ Opening GitHub Pages site
driver.get("https://subhadeeps91.github.io")
time.sleep(8)

# ✅ Capture screenshot of mobile view
driver.save_screenshot("github_mobile_view.png")
print("Screenshot saved as github_mobile_view.png")

# ✅ Print page title
print("Page Title:", driver.title)

# ✅ Validate header element
try:
    header = driver.find_element(By.TAG_NAME, "h1")
    print("Header Text:", header.text)
except:
    print("Header not found.")

# ✅ Close browser
driver.quit()
