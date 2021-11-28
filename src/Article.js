import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import { Text, Card, Divider } from "react-native-elements";
 

const defaultJSONData = {
  source: {
    id: null,
    name: "Nikkei.com",
  },
  author: "日本経済新聞社",
  title: "新生銀行、SBIへの買収防衛策を一転取り下げ - 日本経済新聞",
  description:
    "新生銀行は24日、SBIホールディングスによるTOB（株式公開買い付け）に対抗するための買収防衛策を一転、取り下げる方針を固めた。防衛策発動の是非を諮る25日の臨時株主総会は中止する。約2割の議決権を持つ国が防衛策に賛成しない方針で、否決の公算が大きくなっていた。新生銀がSBIによるTOBに対する「反対」意見を「中立」に変更する。新生銀とSBIは24日に水面下で協議し、SBI側は新生銀が国に示",
  url: "https://www.nikkei.com/article/DGXZQOUB2315T0T21C21A1000000/",
  urlToImage:
    "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO1298566023112021000000-1.jpg?ixlib=js-2.3.2&auto=format%2Ccompress&ch=Width%2CDPR&q=45&fit=crop&bg=FFFFFF&w=1200&h=630&fp-x=0.5&fp-y=0.5&fp-z=1&crop=focalpoint&s=502d0d94c07888caa8d2eced8ad2f09a",
  content: null,
};

class Article extends Component {
  render() {
     

    return (
      <TouchableHighlight>
        <Card
          featuredTitle={defaultJSONData.title}
          featuredTitleStyle={{
            marginHorizontal: 5,
            textShadowColor: "#00000f",
            textShadowOffset: { width: 3, height: 3 },
            textShadowRadius: 3,
          }}
          image={{
            uri: "https://media2.foxnews.com/BrightCove/694940094001/2019/02/08/694940094001_5999770984001_5999767526001-vs.jpg",
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {defaultJSONData.description || "Read more..."}
          </Text>
          <Divider style={{ backgroundColor: "#dfe6e9" }} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                margin: 5,
                fontStyle: "italic",
                color: "#b2bec3",
                fontSize: 10,
              }}
            >
              {defaultJSONData.source.name.toUpperCase()}
            </Text>
            <Text
              style={{
                margin: 5,
                fontStyle: "italic",
                color: "#b2bec3",
                fontSize: 10,
              }}
            >
               
            </Text>
          </View>
        </Card>
      </TouchableHighlight>
    );
  }
}

export default Article;
