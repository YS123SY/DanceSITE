import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/test.css'

class Test extends Component {

  render() {
    return (
        <div className="accordion">
        <ul>
          <li tabindex="1">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="2">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="3">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="4">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="5">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Test;
