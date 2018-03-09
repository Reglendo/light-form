"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Select = function Select(_ref) {
    var children = _ref.children,
        element = _ref.element,
        props = _objectWithoutProperties(_ref, ["children", "element"]);

    if (element) {
        var Element = props._currentElement;
        return _react2.default.createElement(
            Element,
            props,
            children
        );
    }
    return _react2.default.createElement(
        "select",
        props,
        children
    );
};

Select.propTypes = {
    name: _propTypes2.default.string.isRequired
};

exports.default = Select;