import React from "react";
import Drop from "./Drop";

import "../styles/Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="modal-main">
        <div className="modal-div" />

        <Drop file={this.state.image} onDrop={this.onDrop} />
      </div>
    );
  }
}

export default Modal;
