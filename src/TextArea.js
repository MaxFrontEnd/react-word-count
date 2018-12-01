import React from "react";
//import PropTypes from "prop-types";
import Text from "./Text";
class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Введите слово - будет подсчитано количество символов",
      count: 0
    };
    this.insertText = this.insertText.bind(this);
  }
  componentDidMount() {
    this.setState({ count: this.state.name.length });
  }
  insertText(event) {
    this.setState({
      name: event.target.value,
      count: event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <textarea
          className="area"
          value={this.state.name}
          onChange={this.insertText}
        />
        <Text value={Number(this.state.count)} />
      </div>
    );
  }
}

export default TextArea;
