import React from "react";
import Script from "react-load-script";

 export default function GoogleTrends({ type, keyword, url }) {
   const handleScriptLoad = (_) => {
     window.trends.embed.renderExploreWidgetTo(
       document.getElementById("widget"),
       type,
       {
         comparisonItem: [{ keyword, geo: "JP", time: "now 1-d" }],
         category: 0,
         property: "",
       },
       {
         exploreQuery: `q=${encodeURI(keyword)}&geo=JP&date=today now 1-d`,
         guestPath:
           "https://trends.google.com:443/trends/embed/",
       }
     );
   };

   const renderGoogleTrend = (_) => {
     return <Script url={url} onLoad={handleScriptLoad} />;
   };

   return <div className="googleTrend">{renderGoogleTrend()}</div>;
 }
// <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderWidget("dailytrends", "", {"geo":"JP","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>

// ネットフリックス{
  /* <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"ネットフリックス","geo":"JP","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%E3%83%8D%E3%83%83%E3%83%88%E3%83%95%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9&geo=JP&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script> */

// 株式会社{/* <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"株式会社","geo":"JP","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE&geo=JP&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script> */}