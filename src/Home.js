import React from 'react'
// import VideoPlayer from "react-background-video-player";
import "./Home.css";
import BookIcon from "@mui/icons-material/Book";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="hello">Hello</h1>
        <div>
          <img src="DSC00200.JPG" alt="SantaBarbaraBeach" />
        </div>
      </div>

      <div className="home__body">
        <Link to="/books" className="book__info">
          <h3>Books/Movies</h3>
          <CelebrationIcon className="menu__book__icon" />
          <p>Books and Movies</p>
        </Link>
        <Link to="/izaka" className="izaka__info">
          <h3>TWEETS</h3>
          <PeopleIcon className="izaka__icon" />
          <p>What's happening</p>
        </Link>
        <Link to="/blog" className="blog__info">
          <h3>SNS</h3>
          <BookIcon className="blog__icon" />
          <p>Youtube, Note, Twitter, Instagram</p>
        </Link>
        <Link to="/news" className="news__info">
          <h3>NEWS</h3>
          <ArticleIcon className="news__icon" />
          <p>news</p>
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

