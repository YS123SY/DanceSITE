import React from "react";
import axios from "axios";
import "../styles/Dancer.css";
import { Link } from "react-router-dom";

class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dancer: {}
    };
  }
  componentDidMount = () => {
    axios.get(`/dancer/${this.props.id}`).then(res => {
      console.log(res);
      this.setState({
        dancer: { ...res.data }
      });
    });
  };

  /* onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  upDateUser = value => {
    axios.put(`/admin/${this.props.id.match.params.id}`, { ...value });
  };*/
  render() {
    return (
      <div className="column">
        <div className="row">
          <div className="div-image">
            <img className="image-user" src={this.state.dancer.image} />
          </div>
          <div className="div-para">
            <h4>
              <span className="span">Pseudo : </span>
              {this.state.dancer.pseudo}
            </h4>
            <h4>
              <span>age :</span>
              {this.state.dancer.age}
            </h4>
            <h4>
              <span>Sexe :</span>
              {this.state.dancer.sexe}
            </h4>
            <h4>
              <span>Ville :</span>
              {this.state.dancer.ville}
            </h4>
            <h4>
              <span>Category :</span>
              {this.state.dancer.category}
            </h4>

            <Link to={`/modify/${this.state.dancer._id}`}>
              <button className="btn-user">Modify Profil</button>
            </Link>
          </div>
        </div>

        <div className="div-annonce">
          <p className="annonce-user"> {this.state.dancer.annonce} </p>
        </div>
      </div>
    );
  }
}

export default Dancer;
