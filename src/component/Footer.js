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
              <a href="#" class="fa fa-facebook" />
              <a href="#" class="fa fa-twitter" />
              <a href="#" class="fa fa-google" />
              <a href="#" class="fa fa-linkedin" />
              <a href="#" class="fa fa-youtube" />
              <a href="#" class="fa fa-instagram" />
            </div>
          </div>
        </div>
        <div className="copy">
          <span className="rights">© 2018 Copyright</span>
        </div>
      </div>
    );
  }
}

export default Footer;
