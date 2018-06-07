import React, { Component } from "react";
import "../styles/App.css";

import Accordion from "./Accordion";
import Swiped from "./Swiped";
import MultyDancer from "./MultyDancer";
import SearchBar from "./SearchBar";
import CountDown from "./CountDown";

class HomePage extends Component {
  render() {
    return (
      <div className="Body">
        <Accordion />
        <Swiped />
        <SearchBar />
      </div>
    );
  }
}

export default HomePage;
