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
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="kyodo_official"
        options={{ height: 400 }}
      />
    </div>
  );
}

export default Izaka


// <a class="twitter-timeline" href="https://twitter.com/elonmusk?ref_src=twsrc%5Etfw">Tweets by elonmusk</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
