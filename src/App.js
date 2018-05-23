import React, { Component } from "react";
import "./App.css";
import Collection from "./component/Collection.js";

class App extends Component {
  render() {
    return (
      <div
        id="pentitle"
        style="display: none;"
        data-title="Expanding Horizontal Accordion in React"
      >
        <div id="root" />
        <div className="App">
          <Collection />
        </div>
      </div>
    );
  }
}

export default App;
