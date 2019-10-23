import requests
from bs4 import BeautifulSoup as soup

url = "https://timesofindia.indiatimes.com/briefs"

response = requests.get(url)

page_soup = soup(response.text, "html.parser")
content = []
r = {}
for i in range(0, len(page_soup.find_all("div", attrs={"class":
                                                       "brief_box"}))):
    body = page_soup.findAll("div", class_="brief_box")[i]
    if (body.has_attr("data-type")):
        continue
    heading = body.find("h2").text
    brief = body.find("p").text
    category = body.find("span").text
    imgUrl = body.find("img")["data-src"]
    content.append({
        'heading': heading,
        'brief': brief,
        'category': category,
        'imgUrl': imgUrl
    })
# print(content)
for i in content:
    print(i["brief"])
    print("\n")
