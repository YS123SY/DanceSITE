import React, { Component } from "react";
import "../styles/App.css";

import Accordion from "./Accordion";
import Swiped from "./Swiped";

class HomePage extends Component {
  render() {
    return (
      <div className="Body">
        <Accordion />
        <Swiped />
      </div>
    );
  }
}

export default HomePage;
