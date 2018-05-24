import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-main">
        <div className="info">
          <div className="contact"> 
            <span className="text">Contact us</span>
            <span className="sub-text">+216 00 000 000</span>
            <span className="sub-text">test@test.com</span>
            <span className="sub-text">tunis,1008 rue ...</span>
          </div>
         
          <div className="social-container">
            <span className="text">meet us on social media</span>
            <div className="social">   
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-google"></a>
              <a href="#" class="fa fa-linkedin"></a>
              <a href="#" class="fa fa-youtube"></a>
              <a href="#" class="fa fa-instagram"></a></div>
          
            </div>
      </div>
      <div className="copy">
      <h1>
          © 2018 Copyright
        </h1></div>
      
      </div>
    );
  }
}

export default Footer;
