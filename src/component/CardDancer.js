import React, { Component } from "react";
import { Grid, Row, Thumbnail, Button, Col } from "react-bootstrap";
import "../styles/CardDancer.css";
import axios from "axios";

class CardDancer extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={this.props.user.image} alt="242x200">
                <h3>
                  {this.props.user.pseudo} {this.props.user.age}
                </h3>
                <p>{this.props.user.category}</p>
                <Button bsStyle="primary">Let Dance</Button>&nbsp;
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default CardDancer;
