 import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "9793cd5b524345e7923d0a7820669fa6";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";


 useEffect(() => {
    axios
      .get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=jp&apiKey=${apiKey}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
