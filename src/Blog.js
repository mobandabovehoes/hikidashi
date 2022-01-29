//  import React from 'react'
//  import Iframe from 'react-iframe';
//  import "./Blog.css";
//  import {
//    TwitterTimelineEmbed,
//    TwitterFollowButton,
//  } from "react-twitter-embed";
// import InstagramEmbed from "react-instagram-embed";
//  function Blog() {
//    return (
//      <div className="blog">
//        <div className="blog__title">
//          <h1>ブログ、山、旅行、思ったこと</h1>
//        </div>
//        <Iframe
//          className="note-embed"
//          url="https://note.com/embed/notes/nc899cc94060d"
//        />
//        <TwitterTimelineEmbed
//          sourceType="profile"
//          screenName="lil_jap_kid"
//          options={{ height: 400 }}
//        />
//        <TwitterFollowButton screenName={"lil_jap_kid"} />
//        <InstagramEmbed
//          url="https://www.instagram.com/lil_jap_kid/"
//          clientAccessToken="123|456"
//          maxWidth={320}
//          hideCaption={false}
//          containerTagName="div"
//          protocol=""
//          injectScript
//          onLoading={() => {}}
//          onSuccess={() => {}}
//          onAfterRender={() => {}}
//          onFailure={() => {}}
//        />
//      </div>
//    );
//  }
 
//  export default Blog
 
 import "./Blog.css";
 import InstagramIcon from "@mui/icons-material/Instagram";
 import TwitterIcon from "@mui/icons-material/Twitter";
 import EventNoteIcon from "@mui/icons-material/EventNote";
 import Link from "@mui/material/Link";
 import YouTubeIcon from "@mui/icons-material/YouTube";

 function Blog() {
   return (
     <main>
       <h1>ろんちゃん</h1>
       <div className="content">
         <Link href="https://twitter.com/lil_jap_kid">
           <TwitterIcon color="primary" sx={{ fontSize: 40 }} />
         </Link>
         <Link href="https://www.instagram.com/lil_jap_kid/">
           <InstagramIcon color="primary" sx={{ fontSize: 40 }} />
         </Link>
         <Link href="https://note.com/lil_jap_kid">
           <EventNoteIcon color="primary" sx={{ fontSize: 40 }} />
         </Link>
         <Link href="https://www.youtube.com/channel/UCYXLKxSdHQ5fHwlWjisVsZw">
           <YouTubeIcon color="primary" sx={{ fontSize: 40 }} />
         </Link>
       </div>
     </main>
   );
 }

 export default Blog;
