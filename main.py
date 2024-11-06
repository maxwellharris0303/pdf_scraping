from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import *
from time import sleep
import scraping_bot

driver = webdriver.Chrome()
driver.maximize_window()

url = "https://www.arubanetworks.com/techdocs/ArubaOS_86_Web_Help/Content/home.htm"
driver.get(url)

WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[class=\"homecard\"]")))

homecards = driver.find_elements(By.CSS_SELECTOR, "div[class=\"homecard\"]")
print(len(homecards))
main_urls = []
for homecard in homecards:
    urls = homecard.find_elements(By.TAG_NAME, "a")
    for url in urls:
        main_urls.append(url.get_attribute('href'))

# print(main_urls)
print(len(main_urls))
count = 0
for main_url in main_urls:
    driver.get(main_urls[count])
    WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "ul[class=\"sub-menu\"]")))

    sub_menu = driver.find_element(By.CSS_SELECTOR, "ul[class=\"sub-menu\"]")
    sub_menu_lists = sub_menu.find_elements(By.XPATH, './*')
    sub_menu_count = len(sub_menu_lists)
    print(sub_menu_count)

    sub_menu_urls = []
    index = 0
    for _ in range(sub_menu_count):
        sub_menu_lists[index].click()
        sleep(1.5)
        sub_menu = driver.find_element(By.CSS_SELECTOR, "ul[class=\"sub-menu\"]")
        sub_menu_lists = sub_menu.find_elements(By.XPATH, './*')
        links = sub_menu_lists[index].find_elements(By.TAG_NAME, "a")
        for link in links:
            sub_menu_urls.append(link.get_attribute('href'))
        index += 1

    print(sub_menu_urls)
    print(len(sub_menu_urls))

    scraping_bot.run_bot(sub_menu_urls)
    count += 1

driver.quit()
print("Done!")

