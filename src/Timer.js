import React from "react";
import PropTypes from "prop-types";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spent: 0,
      sec: 0,
      min: 0
    };

    this._ticker = this._ticker.bind(this);
  }

  componentDidMount() {
    this._ticker();
  }

  _ticker() {
    const that = this;
    let interval = setInterval(function() {
      if (that.state.spent !== 0 && that.state.spent % 59 === 0) {
        let min = that.state.min + 1;
        that.setState({
          sec: 0,
          min: min
        });
      }
      console.log(that.state.spent);
      that.setState({
        spent: Math.round((Date.now() - that.props.start) / 1000),
        sec: that.state.sec + 1
      });
    }, 1000);
  }

  render() {
    return (
      <div className="timer">
        <h4>Время проведенное на сайте</h4>
        <p>
          {this.state.min} минуты {this.state.sec} секунды
        </p>
      </div>
    );
  }
}

Timer.propTypes = {
  start: PropTypes.number
};
export default Timer;
