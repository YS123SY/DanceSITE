import React from "react";
import "../styles/App.css";

const TimeCalc = time => {
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerHour = 1000 * 60 * 60;
  const msPerMinute = 1000 * 60;
  const d = Math.floor(time / msPerDay);
  const drest = time % msPerDay;
  const h = Math.floor(drest / msPerHour);
  const hrest = drest % msPerHour;
  const mn = Math.floor(hrest / msPerMinute);
  const mrest = hrest % msPerMinute;
  const s = Math.floor(mrest / 1000);
  return time > 0 ? (
    <div>
      <h4> Temps restant : </h4>
      <span>
        {String(d) +
          "j :" +
          String(h).padStart(2, "0") +
          "h :" +
          String(mn).padStart(2, "0") +
          "mn :" +
          String(s).padStart(2, "0") +
          "s"}
      </span>
    </div>
  ) : (
    <span style={{ color: "red" }}> La date est expirée </span>
  );
};
const dateDiff = (startDate, duration, currentDate) => {
  const dateold = new Date(startDate).getTime();
  const diff = duration * 1000 * 60 * 60 - currentDate + dateold;
  return diff;
};

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.second(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  second = () => {
    this.setState({
      time: this.state.time + 1000
    });
  };

  render() {
    return (
      <div className="timecontainer">
        <div>
          {TimeCalc(
            dateDiff(
              this.props.startDate,
              this.props.duration,
              this.props.currentDate
            ) - this.state.time
          )}
        </div>
      </div>
    );
  }
}
export default CountDown;
