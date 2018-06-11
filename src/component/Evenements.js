import React from "react";
import Drop from "./Drop";
import axios from "axios";
import "../styles/Evenements.css";

class Evenements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evenements: [],
      event: "",
      lieu: "",
      image: "",
      description: "",
      date: "",
      time: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount = () => {
    axios.get(`/evenements`).then(res => {
      this.setState({
        evenements: res.data
      });
    });
  };
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

  addEvent = () => {
    axios.post("/add_events", { ...this.state }).catch();
  };
  render() {
    return (
      <div className="event-div">
        <h1 className="event-title">Evenements </h1>
        <div className="center-even">
          <div className="sous-title">Créer un évenement : </div>

          <div className="column-div">
            <div className="row-div">
              <div className="div-title">photo de l'évenement :</div>
              <div className="div-content">
                <Drop file={this.state.image} onDrop={this.onDrop} />
              </div>
            </div>
            <div className="row-div">
              <div className="div-title">Nom de l'évenement :</div>
              <div className="div-content">
                {" "}
                <input
                  type="holderspace"
                  value={this.state.event}
                  className="input"
                  placeholder="nom"
                  onChange={this.onChange}
                  name="event"
                />
              </div>
            </div>
            <div className="row-div">
              <div className="div-title">Lieu de l' évenement :</div>
              <div className="div-content">
                {" "}
                <input
                  type="holderspace"
                  value={this.state.lieu}
                  className="input"
                  placeholder="Lieu"
                  onChange={this.onChange}
                  name="lieu"
                />
              </div>
            </div>
            <div className="row-div">
              <div className="div-title">Date/Heure de l évent :</div>
              <div className="div-content">
                <input
                  type="date"
                  value={this.state.date}
                  className="input"
                  onChange={this.onChange}
                  name="date"
                />
                <input
                  type="time"
                  value={this.state.time}
                  className="input"
                  onChange={this.onChange}
                  name="time"
                />
              </div>
            </div>
            <div className="row-div">
              <div className="div-title">Description de l évent : </div>
              <div className="div-content-des">
                <textarea
                  type="holderspace"
                  value={this.state.description}
                  className="input-des"
                  placeholder="description"
                  onChange={this.onChange}
                  name="description"
                />
              </div>
            </div>
            <button className="btn-event" onClick={() => this.addEvent()}>
              Done
            </button>
          </div>
        </div>
        <div className="">
          {this.state.evenements.map((el, i) => {
            return (
              <div className="input-div-event">
                <div className="annonce-event-div">
                  <div className="image-event">
                    <img src={el.image} />
                  </div>
                  <div className="all-event">
                    <span className="span-event">{el.event} </span>
                    <span className="span-event">{el.lieu} </span>
                    <span className="span-event"> {el.date}</span>
                    <span className="span-event"> {el.time}</span>
                  </div>
                  <div className="event-div-user"> {el.description} </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Evenements;
