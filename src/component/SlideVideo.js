import React, { Component } from "react";
import "../styles/CardTest.css";

class SlideVideo extends React.Component {
  render() {
    return (
      <section class="form-dark">
        <div
          class="card card-image"
          style={{
            backgroundImage: `url(
              "https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg"
            )`,
            width: "28rem"
          }}
        >
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div class="text-center">
              <h3 class="white-text mb-5 mt-4 font-weight-bold">
                <strong>SIGN</strong>{" "}
                <a class="green-text font-weight-bold">
                  <strong> UP</strong>
                </a>
              </h3>
            </div>

            <div class="md-form">
              <input
                type="text"
                id="Form-email5"
                class="form-control white-text"
              />
              <label for="Form-email5">Your email</label>
            </div>

            <div class="md-form pb-3">
              <input
                type="password"
                id="Form-pass5"
                class="form-control white-text"
              />
              <label for="Form-pass5">Your password</label>
              <div class="form-check my-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck17"
                />
                <label class="form-check-label white-text" for="defaultCheck17">
                  Accept the<a href="#" class="green-text font-weight-bold">
                    {" "}
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div class="row d-flex align-items-center mb-4">
              <div class="text-center mb-3 col-md-12">
                <button
                  type="button"
                  class="btn btn-success btn-block btn-rounded z-depth-1"
                >
                  Sign in
                </button>
              </div>
            </div>

            <div class="col-md-12">
              <p class="font-small white-text d-flex justify-content-end">
                Have an account?{" "}
                <a href="#" class="green-text ml-1 font-weight-bold">
                  {" "}
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SlideVideo;
