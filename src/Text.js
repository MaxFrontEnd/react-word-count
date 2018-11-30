import React from "react";
import PropTypes from "prop-types";
function Text(props) {
  return <h1 className="num">{props.value}</h1>;
}
Text.propTypes = {
  value: PropTypes.number
};
export default Text;
