function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import SelectItem from "react-select-item";

var Select = function Select(_ref) {
    var children = _ref.children,
        selectItem = _ref.selectItem,
        props = _objectWithoutProperties(_ref, ["children", "selectItem"]);

    if (selectItem === true) {
        return React.createElement(
            SelectItem,
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