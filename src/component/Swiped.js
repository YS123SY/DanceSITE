import React from "react";
import Swiper from "react-id-swiper";
import axios from "axios";

import CardDancer from "./CardDancer";

export default class Swiped extends React.Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
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

  goNext() {
    if (this.swiper) this.swiper.slideNext();
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  render() {
    console.log(this.state.dancers);
    const params = {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    };

    return (
      <Swiper
        {...params}
        ref={node => {
          if (node) this.swiper = node.swiper;
        }}
      >
        {this.state.dancers.map((el, i) => <CardDancer user={el} key={i} />)}
      </Swiper>
    );
  }
}
