import React from "react";
import "../styles/Evenements.css";

class Evenements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="event-div">
        <h1 className="event-title">Evenements </h1>
        <div>
          <h5>photo de l'évenement</h5>
          <img src="" />
        </div>
        <div>
          <h5>Nom de l'évenement</h5>
          <input />
        </div>
        <div>
          <h5>Lieu</h5>
          <input className="" />
        </div>
        <div>
          <h5>Date/Heures</h5>
          <input className="" />
        </div>
        <div>
          <h5>Description </h5>
          <input className="" />
        </div>
      </div>
    );
  }
}
export default Evenements;
