import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "9793cd5b524345e7923d0a7820669fa6";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  useEffect(() => {
    axios
      .get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines?country=jp&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

//  <h1 className="news__title">{data.title}</h1>
//       <p className="news__desc">{data.description}</p>
//       <span className="news__author">{data.author}</span> <br />
//       <span className="news__published">{data.publishedAt}</span>
//       <span className="news__source">{data.source.name}</span>
