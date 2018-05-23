import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import Collection from "./component/Collection";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Collection />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
