import React, { Component } from "react";
import { Grid, Row, Thumbnail, Button, Col } from "react-bootstrap";
import "../styles/CardDancer.css";
import axios from "axios";

class CardDancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
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
  onMouseMouve = () => {
    this.setState({
      hover: true
    });
  };
  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  render() {
    const { hover } = this.state;
    return (
      <div>
        <div className="card card-cascade wider">
          <div className="view overlay">
            <img
              className={`card-img-top ${hover ? "active card-img-top" : ""}`}
              src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg"
              alt="Card image cap"
              onMouseEnter={this.onMouseMouve}
              onMouseLeave={this.onMouseLeave}
            />
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>

          <div className="card-body text-center">
            <h4 className="card-title">
              <strong>Alison Belmont</strong>
            </h4>
            <h5 className="blue-text pb-2">
              <strong>Graffiti Artist</strong>
            </h5>
            <p className="card-text">
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{" "}
            </p>

            <a className="px-2 fa-lg li-ic">
              <i className="fa fa-linkedin" />
            </a>
            <a className="px-2 fa-lg tw-ic">
              <i className="fa fa-twitter" />
            </a>

            <a className="px-2 fa-lg fb-ic">
              <i className="fa fa-facebook" />
            </a>
          </div>
        </div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail
                src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg"
                alt="242x200"
              >
                <h3>Alison Belmont </h3>
                <h4> 21</h4>

                <p>zumba</p>
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
