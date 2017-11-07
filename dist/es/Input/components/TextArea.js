import React from "react";
import PropTypes from "prop-types";

var TextArea = function TextArea(props) {
    return React.createElement("textarea", props);
};

TextArea.propTypes = {
    name: PropTypes.string.isRequired
};

export default TextArea;