
import './App.css';
import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import Header from './components/Header'
const { Meta } = Card;


function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="App">
     
      
      <div className='container pb-5 rounded scroll-auto'>
      <Header brand="NewsMonkey"  className="mb-5" />
      <div style={{paddingTop: "80px"}}>
        {news &&
          news.map((item, index) => {
            return (
              <Card
                key={index}
                hoverable
                style={{ width: "50%" }}
                cover={<img alt="image" src={item.urlToImage} />} className="mt-5 card-body"
              >
                <Meta title={item.title} description={item.content} />
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Button style={{ marginTop: "10px" }}>
                    Read More
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>
        </div>
    </div>
  );
}

export default App;