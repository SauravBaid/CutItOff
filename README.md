# CutItOff
A Text Summarizing website which summarizes text and news articles of Times Of India 


RUN THE BACKEND SERVER:

cd AI_backend
npm install
npm run dev


Route 1: 

URL :- http://localhost:5000/timesofindia   
REQUEST METHOD : GET

BODY:-  none

RESPONSE : [{
  originalData : "",
  summarizedData : "",
  heading : "",
  imgUrl : "",
  category : ""
}]



Route 2:

URL :- http://localhost:5000/summarizeowntext
REQUEST METHOD : POST

BODY : {
  content : ""
}

RESPONSE : {
  result : ""
}
