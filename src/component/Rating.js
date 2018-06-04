import React from "react";
import "../styles/Dancer.css";

const Star = ({ onClickStar, isChecked }) => {
  return (
    <div
      className={"fa fa-star the-star " + (isChecked ? "checked" : "")}
      onClick={onClickStar}
    />
  );
};

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.starsNumber = 5;
    this.state = {
      indexChecked: -1
    };
  }

  setIndexStars = i => {
    this.setState({
      indexChecked: i
    });
  };

  render() {
    let array = [];
    for (let i = 0; i < this.starsNumber; i++) {
      array.push(
        <Star
          isChecked={i < this.state.indexChecked}
          onClickStar={() => this.setIndexStars(i + 1)}
        />
      );
    }
    return array;
  }
}
export default Rating;
