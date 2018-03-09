function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

var Select = function Select(_ref) {
    var children = _ref.children,
        element = _ref.element,
        props = _objectWithoutProperties(_ref, ["children", "element"]);

    if (element) {
        var Element = props._currentElement;
        return React.createElement(
            Element,
            props,
            children
        );
    }
    return React.createElement(
        "select",
        props,
        children
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired
};

export default Select;