import React from 'react'
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./Izaka.css";
 
function Izaka() {
  return (
    <div className="izaka">
      <div className="izaka__title">
        <h1>つぶやき。</h1>
      </div>

      <TwitterTweetEmbed
        // Here goes your copied ID.
        tweetId={"1458042395870711808"}
        // Style options goes here:
      />

  
      
    </div>
  );
}

export default Izaka
