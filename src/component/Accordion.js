import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/Accordion.css";

class Accordion extends Component {
  render() {
    return (
      <div className="accordion">
        <ul>
          <li tabindex="1">
            <div>
              <a href="#">
                <h2>ZUMBA</h2>
                <p>Looking for your Zumba partner or team</p>
              </a>
            </div>
          </li>
          <li tabindex="2">
            <div>
              <a href="#">
                <h2>TAE BO</h2>
                <p>Looking for your Tae Bo partner or team</p>
              </a>
            </div>
          </li>
          <li tabindex="3">
            <div>
              <a href="#">
                <h2>BACHATA</h2>
                <p>Looking for your Bachata partner or team</p>
              </a>
            </div>
          </li>
          <li tabindex="4">
            <div>
              <a href="#">
                <h2>TANGO SALSA</h2>
                <p>Looking for your Tango/Salsa partner or team</p>
              </a>
            </div>
          </li>
          <li tabindex="5">
            <div>
              <a href="#">
                <h2>DANSE ORIENTALE</h2>
                <p>Looking for your Oriental Dance partner or team</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Accordion;
