import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./component/HomePage";
import Inscription from "./component/Inscription";
import CardDancer from "./component/CardDancer";
import Connection from "./component/Connection";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Body">
          <CardDancer />
        </div>
      </Router>
    );
  }
}

export default App;
