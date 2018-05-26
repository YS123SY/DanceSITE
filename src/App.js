import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./component/HomePage";
import Inscription from "./component/Inscription";
import CardDancer from "./component/CardDancer";
import Connection from "./component/Connection";
import SlideVideo from "./component/SlideVideo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Body">
          <HomePage />
        </div>
      </Router>
    );
  }
}

export default App;
