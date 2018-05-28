import React, { Component } from "react";
import { Grid, Row, Thumbnail, Button, Col } from "react-bootstrap";
import "../styles/CardDancer.css";
import axios from "axios";

class CardDancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.state = {
      dancers: []
    };
  }
  componentDidMount = () => {
    axios.get(`/users`).then(res => {
      console.log(res);
      this.setState({
        dancers: res.data
      });
    });
  };
  render() {
    console.log(this.state.dancers);
    return (
      <div>
        {this.state.dancers.map((el, i) => {
          return (
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Thumbnail src={el.image} alt="242x200">
                    <h3>
                      {el.pseudo} {el.age}
                    </h3>
                    <p>{el.category}</p>
                    <Button bsStyle="primary">Let Dance</Button>&nbsp;
                    <Button bsStyle="default">No</Button>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
          );
        })}
      </div>
    );
  }
}

export default CardDancer;
