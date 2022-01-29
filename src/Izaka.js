import React from 'react'
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./Izaka.css";
 
function Izaka() {
  return (
    <div className="izaka">
      <div className="izaka__title">
        <h1>Tweets</h1>
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="GoogleTrends"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="zerohedge"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="nikkei"
        options={{ height: 400 }}
      />
    </div>
  );
}

export default Izaka
