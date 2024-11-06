from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get('https://www.arubanetworks.com/techdocs/ArubaOS_86_Web_Help/Content/arubaos-solutions/config-hierarchy/unde-conf-hier.htm')

image_element = driver.find_elements(By.TAG_NAME, "img")

index = 0
for image in image_element:
    # Save the image
    image.screenshot(f'image{index}.png')
    index += 1

driver.quit()