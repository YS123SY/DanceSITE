import React from "react";
import axios from "axios";
import "../styles/Dancer.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Drop from "./Drop";

class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dancer: {},
      update: false,
      isNull: true,
      changepic: false,
      logo: ""
    };
  }
  componentDidMount = () => {
    axios.get(`/dancer/${this.props.id}`).then(res => {
      this.setState({
        pseudo: res.data.pseudo,
        age: res.data.age,
        ville: res.data.ville,
        sexe: res.data.sexe,
        annonce: res.data.annonce,
        category: res.data.category,
        image: res.data.image,
        dancer: { ...res.data }
      });
    });
  };
  openUpdate = () => {
    this.setState({
      update: !this.state.update
    });
  };
  onUpdate = value => {
    axios
      .put(`/dancer/${this.props.id}`, {
        pseudo: value.pseudo,
        age: value.age,
        sexe: value.sexe,
        image: value.image,
        ville: value.ville,
        annonce: value.annonce
      })
      .then(res => {
        this.setState({
          update: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangePseudo = event => {
    const pseudo = event.target.value;
    this.setState({
      pseudo
    });
  };

  onChangeAge = event => {
    const age = event.target.value;
    this.setState({
      age
    });
  };

  onChangeVille = event => {
    const ville = event.target.value;
    this.setState({
      ville
    });
  };

  onChangeSexe = event => {
    const sexe = event.target.value;
    this.setState({
      sexe
    });
  };
  onChangeAnnonce = event => {
    const annonce = event.target.value;
    this.setState({
      annonce
    });
  };
  onChangeCategory = event => {
    const category = event.target.value;
    let array = [];
    array.push(category);
    this.setState({
      category: array
    });
  };

  updatepic = () => {
    this.setState({
      changepic: !this.state.changepic
    });
  };

  render() {
    const { update, isNull } = this.state;
    return (
      <div className="column">
        <div className="row">
          <div className="info">
            <div className="div-image">
              <img className="image-user" src={this.state.image} />
              <span className="modify-pic" onClick={this.updatepic}>
                Another Pic
              </span>
              <div className="rating-container">
                <Rating />
              </div>
            </div>
            <div className="div-para">
              <h4>
                <span className="span">Pseudo : </span>
                {update ? (
                  <input
                    value={this.state.pseudo}
                    className="input"
                    onChange={this.onChangePseudo}
                  />
                ) : (
                  this.state.pseudo
                )}
              </h4>
              <h4>
                <span className="span">age : </span>
                {update ? (
                  <input
                    value={this.state.age}
                    className="input"
                    onChange={this.onChangeAge}
                  />
                ) : (
                  this.state.age
                )}
              </h4>
              <h4>
                <span className="span">Sexe : </span>
                {update ? (
                  <input
                    value={this.state.sexe}
                    className="input"
                    onChange={this.onChangeSexe}
                  />
                ) : (
                  this.state.sexe
                )}
              </h4>
              <h4>
                <span className="span">Ville : </span>
                {update ? (
                  <input
                    value={this.state.ville}
                    className="input"
                    onChange={this.onChangeVille}
                  />
                ) : (
                  this.state.ville
                )}
              </h4>
              <h4>
                <span className="span">Category : </span>
                {update ? (
                  <input
                    value={this.state.category}
                    className="input"
                    onChange={this.onChangeCategory}
                  />
                ) : this.state.category === null ? (
                  <p />
                ) : (
                  this.state.dancer.hasOwnProperty("category") &&
                  this.state.category.join(", ")
                )}
              </h4>

              {update ? (
                <button
                  className="btn-user"
                  onClick={() =>
                    this.onUpdate({
                      pseudo: this.state.pseudo,
                      age: this.state.age,
                      sexe: this.state.sexe,
                      ville: this.state.ville,
                      category: this.state.category,
                      annonce: this.state.annonce,
                      image: this.state.image
                    })
                  }
                >
                  Done
                </button>
              ) : (
                <button className="btn-user" onClick={this.openUpdate}>
                  Modify Profil
                </button>
              )}
            </div>
          </div>

          <div className="div-annonce">
            {update ? (
              <textarea
                className="textarea"
                value={this.state.annonce}
                onChange={this.onChangeAnnonce}
              />
            ) : (
              <p className="annonce-user"> {this.state.annonce} </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Dancer;
