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
        <h2 className="sous-title">Créer un évenement </h2>

        <div className="column-div">
          <div className="row-div">
            <h3 className="h3-title">photo de l'évenement</h3>
            <img src="" />
          </div>
          <div className="row-div">
            <h3 className="h3-title">Nom de l'évenement</h3>
            <input />
          </div>
          <div className="row-div">
            <h3 className="h3-title">Lieu</h3>
            <input className="" />
          </div>
          <div className="row-div">
            <h3 className="h3-title">Date/Heures</h3>
            <button />
          </div>
          <div className="row-div">
            <h3 className="h3-title">Description </h3>
            <input className="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Evenements;
