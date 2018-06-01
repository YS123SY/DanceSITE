import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./component/HomePage";
import Inscription from "./component/Inscription";
import Connection from "./component/Connection";
import FooterPage from "./component/FooterPage";
import NavBar from "./component/NavBar";
import Rootes from "./Routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Body">
          <NavBar />
          <div className="routes">
            <Rootes />
          </div>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
