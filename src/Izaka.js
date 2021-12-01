import React from 'react'
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./Izaka.css";
 
function Izaka() {
  return (
    <div className="izaka">
      <div className="izaka__title">
        <h1>つぶやき。</h1>
      </div>

     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 400 }}
      />

  
      
    </div>
  );
}

export default Izaka
