import requests
from bs4 import BeautifulSoup as soup
import re

baseUrl = "https://timesofindia.indiatimes.com/"
url = "https://timesofindia.indiatimes.com/briefs"

response = requests.get(url)

page_soup = soup(response.text, "html.parser")
content = []
r = {}

for i in range(
        0,
        len(page_soup.find_all("div", attrs={"class": "brief_box"})) // 3):
    body = page_soup.findAll("div", class_="brief_box")[i]
    if (body.has_attr("data-type")):
        continue
    heading = body.find("h2").text
    # brief = body.find("p").text
    category = body.find("span").text
    imgUrl = body.find("img")["data-src"]

    # Finding link for the full article and scrapping data
    href = body.find("a")["href"]
    articleURL = baseUrl + href
    res = requests.get(articleURL)
    pageSoup = soup(res.text, "html.parser")

    if (pageSoup.find("div", {"class": "_3WlLe"})):
        subBody = pageSoup.find("div", {"class": "_3WlLe"})
    elif (pageSoup.find("div", {"class": "Normal"})):
        subBody = pageSoup.find("div", {"class": "Normal"})
    article = subBody.text
    article = re.sub(r'[^a-zA-Z0-9\.\ ]', '', article)
    heading = re.sub(r'[^a-zA-Z0-9 ]', '', heading)
    # category = re.sub(r'[^a-zA-Z0-9]', '', category)
    # imgUrl = re.sub(r'[^a-zA-Z0-9]', '', imgUrl)
    # article = article.replace("[^a-zA-Z0-9]", "")
    # article = article.replace('[^a-zA-Z0-9]', "")
    # heading = heading.replace("[^a-zA-Z0-9]", "")
    # heading = heading.replace('[^a-zA-Z0-9]', "")
    # category = category.replace("[^a-zA-Z0-9]", "")
    # category = category.replace('[^a-zA-Z0-9]', "")
    # imgUrl = imgUrl.replace("[^a-zA-Z0-9]", "")
    # imgUrl = imgUrl.replace('[^a-zA-Z0-9]', "")
    content.append({
        'heading': heading,
        'content': article,
        'category': category,
        'imgUrl': imgUrl
    })
print(content)
# for i in content:
#     print(i['heading'])
#     print(i['content'][:100])
#     print("\n")