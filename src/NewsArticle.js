import React from "react";
import Button from "@mui/material/Button";
function NewsArticle({ data }) {
  return (
    <div className="news">
      <img src={data.urlToImage} alt="" />
      <h4 className="news__title">{data.title}</h4>
      <Button>
        <a href={data.url} >
          読む
        </a>
      </Button>
      <span className="news__author">{data.author}</span>  
      <span className="news__published">{data.publishedAt}</span>
    </div>
  );
}

export default NewsArticle;
