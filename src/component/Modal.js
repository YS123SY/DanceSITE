import React from "react";
import Drop from "./Drop";

import "../styles/Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onDrop = accepted => {
    const files = accepted;
    if (files && files.length > 0) {
      const file = files[0];
      this.filename = file.name;
      const reader = new FileReader();
      reader.onload = event => {
        this.setState({
          image: event.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };
  onChangeImage = event => {
    const image = event.target.value;
    this.setState({
      image
    });
  };
  render() {
    return (
      <div className="modal-main">
        <div className="modal-div">
          <Drop file={this.state.image} onDrop={this.onDrop} />
          <button className="btn-create" onClick={() => this.onChangeImage()}>
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
