import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-main">
        <h1>
          © 2018 Copyright: <Link to="/#">yoyo@gmail.com</Link>
        </h1>
      </div>
    );
  }
}

export default Footer;
