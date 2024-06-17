import {React, useState, useEffect } from 'react'
import axios from "axios"
import NavBar from './components/NavBar';
import HeadNews from './components/HeadNews';
import NewsList from './components/NewsList';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function App() {

  const[newsData, setNewsData] = useState([])

  function openInNewTab(url){
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  async function setCategory(category){
    const data = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category="+category+"&apiKey="+NEWS_API_KEY)
    setNewsData(data.data.articles)
  }

  useEffect(()=>{
    async function getData(){
      const data = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey="+NEWS_API_KEY)
      setNewsData(data.data.articles)
    }

    getData()

  },[])

  if(newsData.length > 0){
    return (
      <div>
        <NavBar setCategory={setCategory}/>
        <HeadNews 
          title={newsData[0].title} 
          urlToImage={newsData[0].urlToImage}
          time={newsData[0].publishedAt}
          description={newsData[0].description} 
          onClick={() => openInNewTab(newsData[0].url)}
        /> 
        <hr />
        {newsData.map((item, index)=>{
          if(index !== 0 && item.urlToImage){
            return <NewsList 
              title={item.title} 
              urlToImage={item.urlToImage}
              time={item.publishedAt}
              description={item.description} 
              onClick={() => openInNewTab(item.url)}
              key={index}
            />
          }
        })}
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
  
}

export default App
