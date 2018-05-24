import React from "react";
import axios from "axios";
import "../styles/Inscription.css";

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      sexe: "",
      ville: "",
      image: "",
      email: "",
      password: "",
      confirme: ""
    };
  }

  addUser = user => {
    axios.post("/inscription", { ...user });
  };

  onChangeName = event => {
    const name = event.target.value;
    this.setState({
      name
    });
  };
  onChangeAge = event => {
    const age = event.target.value;
    this.setState({
      age
    });
  };
  onChangeSexe = event => {
    const sexe = event.target.value;
    this.setState({
      sexe
    });
  };
  onChangeVille = event => {
    const ville = event.target.value;
    this.setState({
      ville
    });
  };
  onChangeImage = event => {
    const image = event.target.value;
    this.setState({
      image
    });
  };
  onChangeEmail = event => {
    const email = event.target.value;
    this.setState({
      email
    });
  };
  onChangePassword = event => {
    const password = event.target.value;
    this.setState({
      password
    });
  };
  onChangeConfirmPassword = event => {
    const confirme = event.target.value;
    this.setState({
      confirme
    });
  };
  render() {
    return (
      <div className="sign-main">
        <div className="sign-div">
          <div className="input-div">
            <span className="span-signIn">Name</span>
            <input
              type="holderspace"
              value={this.state.name}
              className="input"
              placeholder="Name"
              onChange={this.onChangeName}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Age</span>
            <input
              type="holderspace"
              value={this.state.age}
              className="input"
              placeholder="Age"
              onChange={this.onChangeAge}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Sexe</span>
            <input
              type="radio"
              id="tech"
              name="Sexe"
              value="Femme"
              className="input"
              onChange={this.onChangeSexe}
            />
            Femme
            <input
              type="radio"
              id="tech"
              name="Sexe"
              value="Homme"
              className="input"
              onChange={this.onChangeSexe}
            />
            Homme
          </div>

          <div className="input-div">
            <span className="span-signIn">Ville</span>
            <input
              type="holderspace"
              value={this.state.ville}
              className="input"
              placeholder="Ville"
              onChange={this.onChangeVille}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Image</span>
            <input
              type="holderspace"
              value={this.state.image}
              className="input"
              placeholder="Image Link"
              onChange={this.onChangeImage}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">E-mail</span>
            <input
              type="holderspace"
              value={this.state.email}
              className="input"
              placeholder="email"
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Password</span>
            <input
              type="holderspace"
              value={this.state.password}
              className="input"
              placeholder="password"
              onChange={this.onChangePassword}
            />
          </div>
          <div className="input-div">
            <span className="span-signIn">Confirmation Password</span>
            <input
              type="holderspace"
              value={this.state.confirme}
              className="input"
              placeholder="confirme password"
              onChange={this.onChangeConfirmPassword}
            />
          </div>

          <div className="submit-div">
            <button
              className="btn-create"
              onClick={() => this.addUser(this.state)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Inscription;
