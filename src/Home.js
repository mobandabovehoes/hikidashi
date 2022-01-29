import React from 'react'
// import VideoPlayer from "react-background-video-player";
import "./Home.css";
import BookIcon from "@mui/icons-material/Book";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="hello">Hello...</h1>
        <div>
          <img src="DSC00200.JPG" alt="SantaBarbaraBeach" />
        </div>
      </div>

      <div className="home__body">
        <Link to="/books" className="book__info">
          <h3>Books </h3>
          <MenuBookIcon className="menu__book__icon" />
          <p>ひろゆき、中田敦彦、メンタリストだいご、おすすめ本。</p>
        </Link>
        <Link to="/izaka" className="izaka__info">
          <h3>つぶやき</h3>
          <PeopleIcon className="izaka__icon" />
          <p>最新情報</p>
        </Link>
        <Link to="/blog" className="blog__info">
          <h3>Blog</h3>
          <BookIcon className="blog__icon" />
          <p>旅行、食事、アメリカ留学</p>
        </Link>
        <Link to="/news" className="news__info">
          <h3>時事ネタ</h3>
          <ArticleIcon className="news__icon" />
          <p>ばずってるニュース</p>
        </Link> 　
      </div>

      {/* <VideoPlayer 
        className="video"
        src={"mixkit-ink-swirling-in-blue-tones-underwater-229.mp4"}
        autoPlay={true}
        muted={true}  
        width="100%"
        text="Hello World"
      /> */}
    </div>
  );
}

export default Home
