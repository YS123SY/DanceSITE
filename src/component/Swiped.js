import React from "react";
import Swiper from "react-id-swiper";
import axios from "axios";
import { Button } from "react-bootstrap";
import Coverflow from "react-coverflow";

import CardDancer from "./CardDancer";

export default class Swiped extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dancers: [],
      active: 0
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

  fn = () => {
    console.log("hey hey hey");
    return 5;
  };

  render() {
    return (
      <div>
        <Coverflow
          width="960"
          height="500"
          displayQuantityOfSide={2}
          navigation={true}
          enableScroll={true}
          clickable={true}
          active={this.state.active}
        >
          {this.state.dancers.map((el, i) => {
            console.log("============> ", el);
            return (
              <img
                src={el.image}
                alt={el.pseudo}
                data-action={`dancer/${el._id}`}
              />
            );
          })}
        </Coverflow>
      </div>
    );
  }
}
