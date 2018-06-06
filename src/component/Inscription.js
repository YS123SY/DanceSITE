import React from "react";
import axios from "axios";
import Drop from "./Drop";

import "../styles/Inscription.css";

const categoryList = [
  "Soirée",
  "Zumba",
  "Salsa",
  "Oriental",
  "tango",
  "Tae Bo",
  "Street Dance",
  "bachata",
  "Danse de salon",
  "Compétition"
];

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      age: "",
      sexe: "",
      ville: "",
      category: [],
      image: "",
      annonce: "",
      email: "",
      password: "",
      confirme: ""
    };
  }

  addUser = () => {
    axios.post("/add_users", { ...this.state }).catch();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeCategory = event => {
    const category = event.target.value;

    if (this.state.category.indexOf(category) < 0) {
      return this.setState({
        category: this.state.category.concat(category)
      });
    } else {
      this.setState({
        category: this.state.category.filter(el => el !== category)
      });
    }
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
              onChange={this.onChange}
              name="pseudo"
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Age</span>
            <input
              type="holderspace"
              value={this.state.age}
              className="input"
              placeholder="Age"
              onChange={this.onChange}
              name="age"
            />
          </div>

          <div className="input-div-sexe">
            <span className="span-signIn">Sexe</span>
            <input
              type="radio"
              id="tech"
              name="sexe"
              value="Femme"
              className="input-sexe"
              onChange={this.onChange}
            />
            Femme
            <input
              type="radio"
              id="tech"
              name="Sexe"
              value="Homme"
              className="input-sexe"
              onChange={this.onChange}
            />
            Homme
          </div>

          <div className="input-div">
            <div className="category-div">
              <span className="span-signIn">Category</span>
              {categoryList.map((el, i) => (
                <div className="input-div-category">
                  <input
                    type="checkbox"
                    onChange={this.onChangeCategory}
                    value={el}
                  />
                  <p> {el}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="input-div">
            <span className="span-signIn">Ville</span>
            <input
              type="holderspace"
              value={this.state.ville}
              className="input"
              placeholder="Ville"
              onChange={this.onChange}
              name="ville"
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Mon Annonce</span>
            <input
              type="holderspace"
              value={this.state.annonce}
              className="input"
              placeholder="Mon Annonce"
              onChange={this.onChange}
              name="annonce"
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
              onChange={this.onChange}
              name="email"
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Password</span>
            <input
              type="holderspace"
              value={this.state.password}
              className="input"
              placeholder="password"
              onChange={this.onChange}
              name="password"
            />
          </div>
          <div className="input-div">
            <span className="span-signIn">Confirmation Password</span>
            <input
              type="holderspace"
              value={this.state.confirme}
              className="input"
              placeholder="confirme password"
              onChange={this.onChange}
              name="confirme"
            />
          </div>

          <div className="submit-div">
            <button className="btn-create" onClick={() => this.addUser()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Inscription;
