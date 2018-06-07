import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Annonces.css";

import SearchBar from "./SearchBar";

class Annonces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annonces: [],
      search: ""
    };
  }
  componentDidMount = () => {
    axios.get("/dancers").then(res => {
      this.setState({
        annonces: res.data
      });
    });
  };

  onChangeSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <div className="Body">
        <SearchBar />
        <input
          value={this.state.search}
          type="text"
          onChange={this.onChangeSearch}
        />
        <h1 className="annonce">Annonces </h1>
        <div className="big-div-annonce">
          {this.state.annonces
            .filter(el =>
              el.annonce.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((el, i) => {
              return (
                <div className="input-div-annonce-category">
                  <div className="annonce-category-div">
                    <div>
                      <img className="image-annonce" src={el.image} />
                    </div>
                    <div className="all-span">
                      <span className="span-annonce">{el.pseudo} </span>
                      <span className="span-annonce">{el.age} </span>
                      <span className="span-annonce">{el.ville} </span>
                      <span className="span-category">{el.category} </span>
                    </div>
                    <div className="annonce-div-user"> {el.annonce} </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Annonces;
