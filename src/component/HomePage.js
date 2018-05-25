import React, { Component } from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import Test from "./Test";
import Footer from "./Footer";

class HomePage extends Component {
  render() {
    return (
      <div className="Body">
        <NavBar />
        <Test />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
