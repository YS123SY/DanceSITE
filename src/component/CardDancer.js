import React, { Component } from "react";
import { Grid, Row, Thumbnail, Button, Col } from "react-bootstrap";
import axios from "axios";

class CardDancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*  componentDidMount = () => {
    axios.get(`/dancer/${this.props.id.match.params.id}`).then(res =>
      this.setState({
        name: res.data.name,
        age: res.data.age,
        image: res.data.image,
        category: res.data.category
      })
    );
};*/

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={this.state.image} alt="242x200">
                <h3>
                  {this.state.name} {this.state.age}
                </h3>
                <p>{this.state.category}</p>
                <p>
                  <Button bsStyle="primary">Let Dance</Button>&nbsp;
                  <Button bsStyle="default">No</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CardDancer;
