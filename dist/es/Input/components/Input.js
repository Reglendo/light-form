import React from "react";
import PropTypes from "prop-types";

var Input = function Input(props) {
    return React.createElement("input", props);
};

Input.propTypes = {
    name: PropTypes.string.isRequired
};

Input.defaultProps = {
    type: 'text'
};

export default Input;