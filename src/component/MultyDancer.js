import React, { Component } from "react";
import { Grid, Row, Thumbnail, Button, Col } from "react-bootstrap";
import "../styles/CardDancer.css";
import axios from "axios";

class MultyDancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dancers: []
    };
  }
  componentDidMount = () => {
    axios.get(`/dancers`).then(res => {
      this.setState({
        dancers: res.data
      });
    });
  };
  render() {
    return (
      <div className="dancer-card">
        {this.state.dancers.map((el, i) => {
          return (
            <Col xs={6} md={4}>
              <Thumbnail src={el.image} alt="242x200">
                <h3>
                  {el.pseudo} {el.age}
                </h3>
                <p>{el.category}</p>
                <Button bsStyle="primary">Let Dance</Button>&nbsp;
              </Thumbnail>
            </Col>
          );
        })}
      </div>
    );
  }
}

export default MultyDancer;
