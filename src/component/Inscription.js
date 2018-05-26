import React from "react";
import axios from "axios";
import Drop from "./Drop";

import "../styles/Inscription.css";

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      age: "",
      sexe: "",
      ville: "",
      categoryList: [
        "kizumba",
        "Salsa",
        "Oriental",
        "tango",
        "Tae Bo",
        "Street Dance",
        "bachata",
        "Danse de salon",
        "Compétition"
      ],
      category: "",
      image: "",
      annonce: "",
      email: "",
      password: "",
      confirme: ""
    };
  }

  addUser = user => {
    axios.post("/inscription", { ...user });
    console.log(user);
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

  onChangeAnnonce = event => {
    const annonce = event.target.value;
    this.setState({
      annonce
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
  render() {
    return (
      <div className="sign-main">
        <div className="sign-div">
          <div className="input-div">
            <span className="span-signIn">Mon Pseudo</span>
            <input
              type="holderspace"
              value={this.state.pseudo}
              className="input"
              placeholder="Mon pseudo"
              onChange={this.onChangePseudo}
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

          <div className="input-div-sexe">
            <span className="span-signIn">Sexe</span>
            <input
              type="radio"
              id="tech"
              name="Sexe"
              value="Femme"
              className="input-sexe"
              onChange={this.onChangeSexe}
            />
            Femme
            <input
              type="radio"
              id="tech"
              name="Sexe"
              value="Homme"
              className="input-sexe"
              onChange={this.onChangeSexe}
            />
            Homme
          </div>

          <div className="input-div">
            <span className="span-signIn">Category</span>
            {this.state.categoryList.map((el, i) => (
              <div className="input-div-category">
                <input type="checkbox" onChange={this.handleCheck} />
                <p> {el}:</p>
              </div>
            ))}
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
            <span className="span-signIn">Mon Annonce</span>
            <input
              type="holderspace"
              value={this.state.annonce}
              className="input"
              placeholder="Mon Annonce"
              onChange={this.onChangeAnnonce}
            />
          </div>
          <div className="input-div">
            <div>
              <span className="span-signIn">Image</span>
            </div>
            <Drop file={this.state.image} onDrop={this.onDrop} />
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
