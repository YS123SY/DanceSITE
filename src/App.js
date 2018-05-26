import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./component/HomePage";
import Inscription from "./component/Inscription";
import CardDancer from "./component/CardDancer";
import Connection from "./component/Connection";
import SlideVideo from "./component/SlideVideo";
import Routes from "./Routes";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Body">
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
