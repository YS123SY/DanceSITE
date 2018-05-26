import React, { Component } from "react";
import "../styles/App.css";

import Accordion from "./Accordion";

class HomePage extends Component {
  render() {
    return (
      <div className="Body">
        <Accordion />
      </div>
    );
  }
}

export default HomePage;
