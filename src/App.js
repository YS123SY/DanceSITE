import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./component/NavBar";
import Test from "./component/Test";
import Footer from "./component/Footer";
import Inscription from "./component/Inscription";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Body">
          <NavBar />
          <Test />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
