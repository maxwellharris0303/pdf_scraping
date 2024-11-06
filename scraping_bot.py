import os
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import *
import requests
from selenium import webdriver
from urllib.parse import urlparse, urljoin
from bs4 import BeautifulSoup
from time import sleep
import convertToPDF

def run_bot(urls):
    # Set up the web driver (Chrome)
    driver = webdriver.Chrome()

    for url in urls:
        # Navigate to the webpage
        driver.get(url)

        # Save the webpage content
        content = driver.page_source

        # Save the content to a file
        with open('webpage.html', 'w', encoding='utf-8') as file:
            file.write(content)

        # Find CSS and JS file URLs
        css_urls = driver.execute_script("var links = document.querySelectorAll('link[rel=\"stylesheet\"]'); \
                                        return Array.from(links).map(link => link.href);")

        js_urls = driver.execute_script("var scripts = document.querySelectorAll('script[src]'); \
                                        return Array.from(scripts).map(script => script.src);")
        image_urls = driver.execute_script("var images = document.querySelectorAll('img[src]'); \
                                            return Array.from(images).map(image => image.src);")

        print(image_urls)
        images = driver.find_elements(By.TAG_NAME, "img")
        print(len(images))

        # sleep(1000)

        # Create directories to store CSS and JS files
        css_dir = 'css'
        js_dir = 'js'
        image_dir = 'images'
        os.makedirs(css_dir, exist_ok=True)
        os.makedirs(js_dir, exist_ok=True)
        os.makedirs(image_dir, exist_ok=True)

        image_count = len(images)
        index = 0
        for _ in range(image_count):
            try:
                file_name = os.path.basename(urlparse(image_urls[index]).path)
            except:
                break
            file_path = os.path.join(image_dir, file_name)
            images[index].screenshot(file_path)
            index += 1

        # Download CSS files
        for css_url in css_urls:
            driver.get(css_url)
            response = driver.page_source
            # response = requests.get(css_url)
            file_name = os.path.basename(urlparse(css_url).path)
            file_path = os.path.join(css_dir, file_name)
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(response)

        # Download JS files
        for js_url in js_urls:
            driver.get(css_url)
            response = driver.page_source
            # response = requests.get(js_url)
            file_name = os.path.basename(urlparse(js_url).path)
            file_path = os.path.join(js_dir, file_name)
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(response)


        # Modify the HTML content
        base_url = driver.current_url
        base_dir = os.path.dirname(os.path.abspath('webpage.html'))
        soup = BeautifulSoup(content, 'html.parser')

        # Modify CSS file paths
        css_tags = soup.findAll('link', {'rel': 'stylesheet'})
        for css_tag in css_tags:
            if 'href' in css_tag.attrs:
                css_url = css_tag['href']
                if css_url.startswith('http'):
                    css_url = urljoin(base_url, css_url)
                css_file_name = os.path.basename(urlparse(css_url).path)
                css_file_path = os.path.join(css_dir, css_file_name)
                css_tag['href'] = os.path.relpath(css_file_path, base_dir)

        # Modify JS file paths
        js_tags = soup.findAll('script', {'src': True})
        for js_tag in js_tags:
            js_url = js_tag['src']
            if js_url.startswith('http'):
                js_url = urljoin(base_url, js_url)
            js_file_name = os.path.basename(urlparse(js_url).path)
            js_file_path = os.path.join(js_dir, js_file_name)
            js_tag['src'] = os.path.relpath(js_file_path, base_dir)

        img_tags = soup.findAll('img', {'src': True})
        for img_tag in img_tags:
            img_url = img_tag['src']
            if img_url.startswith('http'):
                img_url = urljoin(base_url, img_url)
            img_file_name = os.path.basename(urlparse(img_url).path)
            img_file_path = os.path.join(image_dir, img_file_name)
            img_tag['src'] = os.path.relpath(img_file_path, base_dir)

        # Save the modified HTML content
        modified_content = str(soup)
        with open('webpage.html', 'w', encoding='utf-8') as file:
            file.write(modified_content)

        # Close the web driver
        convertToPDF.convert_run()
    driver.quit()

