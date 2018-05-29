import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/Popup.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
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

  inscription = () => {
    axios
      .get(`/dancer/${this.state.email}/${this.state.password}`)
      .then(res => {
        if (res.data === "") alert("cant find user");
        else alert("dancer connected");
      });
  };
  render() {
    return (
<div>
<section class="form-light">

    <div class="card">

        <div class="card-body mx-4">

            <div class="text-center">
                <h3 class="pink-text mb-5"><strong>Sign up</strong></h3>
            </div>

            <div class="md-form">
                <input type="text" id="Form-email2" class="form-control">
                <label for="Form-email2">Your email</label>
            </div>

            <div class="md-form pb-3">
                <input type="password" id="Form-pass2" class="form-control">
                <label for="Form-pass2">Your password</label>
                <div class="form-check my-4">
                  <input class="form-check-input" type="checkbox" id="defaultCheck12">
                  <label for="defaultCheck12" class="grey-text">Accept the<a href="#" class="blue-text"> Terms and Conditions</a></label>
                </div>
            </div>

            <div class="row d-flex align-items-center mb-4">

                <div class="col-md-3 col-md-6 text-center">
                    <button type="button" class="btn btn-pink btn-block btn-rounded z-depth-1">Sign up</button>
                </div>

                <div class="col-md-6">
                    <p class="font-small grey-text d-flex justify-content-end">Have an account? <a href="#" class="blue-text ml-1"> Log in</a></p>
                </div>

            </div>
        </div>

        <div class="footer pt-3 mdb-color lighten-3">

            <div class="row d-flex justify-content-center">
                <p class="font-small white-text mb-2 pt-3">or Sign up with:</p>
            </div>

            <div class="row mt-2 mb-3 d-flex justify-content-center">
                <a class="fa-lg p-2 m-2 fb-ic"><i class="fa fa-facebook white-text fa-lg"> </i></a>
                <a class="fa-lg p-2 m-2 tw-ic"><i class="fa fa-twitter white-text fa-lg"> </i></a>
                <a class="fa-lg p-2 m-2 gplus-ic"><i class="fa fa-google-plus white-text fa-lg"> </i></a>
            </div>

        </div>
        
    </div>

</section>
 </div>  );
  }
}

export default Connection;
