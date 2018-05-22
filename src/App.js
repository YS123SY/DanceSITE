import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="acor-div">
          <div
            className="acor-items"
            style={{
              backgroundImage: `url("https://previews.123rf.com/images/thoermer/thoermer1402/thoermer140200065/25854125-%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84-%E3%83%89%E3%83%AC%E3%82%B9%E5%A5%BD%E6%B0%97%E6%80%A7%E3%81%A8%E3%82%BA%E3%83%B3%E3%83%90%E9%81%8B%E5%8B%95%E3%81%A7%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97.jpg")`
            }}
          />

          <div
            className="acor-items"
            style={{
              backgroundImage: `url("https://assets3.thrillist.com/v1/image/1587962/size/tmg-article_default_mobile;jpeg_quality=20.jpg")`
            }}
          />

          <div
            className="acor-items"
            style={{
              backgroundImage: `url("https://www.spectable.com/image/image/G/spectacle-danse-orientale-nourdance-la-fresnais_337198.jpg")`
            }}
          />

          <div
            className="acor-items"
            style={{
              backgroundImage: `url("https://i.ytimg.com/vi/bA6roOlKm4A/maxresdefault.jpg")`
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
