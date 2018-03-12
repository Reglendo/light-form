"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require("react-redux");

var _dotPropImmutable = require("dot-prop-immutable");

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _Input = require("../ducks/Input");

var _InputContainer = require("./InputContainer.proptypes");

var _InputContainer2 = _interopRequireDefault(_InputContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFieldNamespace = function getFieldNamespace(nameProp) {
    return nameProp.split('.')[0];
};

var InputContainer = function InputContainer(component) {
    return (0, _reactRedux.connect)(function (state) {
        return state;
    }, function (dispatch) {
        return {
            dispatch: dispatch
        };
    }, function (state, dispatch, own) {
        var _onChange = function _onChange(event) {
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            var namespace = getFieldNamespace(own.name);
            var type = (0, _Input.createBoundType)(namespace);

            if (event.target.type === 'select-multiple') {
                var arry = Array.from(event.target.selectedOptions);
                var selected = [];
                arry.map(function (o) {
                    selected.push(o.value);
                });
                dispatch.dispatch((0, _Input.changeField)(type, own.name, value));
                return dispatch.dispatch((0, _Input.changeField)(type, own.name, selected.join('|')));
            } else {
                return dispatch.dispatch((0, _Input.changeField)(type, own.name, value));
            }

            return dispatch.dispatch((0, _Input.changeField)(type, own.name, value));
        };

        var value = own.type === "radio" && own.value !== null ? own.value : own.name && _dotPropImmutable2.default.get(state, own.name) !== undefined ? _dotPropImmutable2.default.get(state, own.name) : '';

        return _extends({}, own, {
            value: own.selectItem ? value ? value.split('|') : [] : value,
            checked: own.type === "radio" && own.value == _dotPropImmutable2.default.get(state, own.name) || own.type === "checkbox" && _dotPropImmutable2.default.get(state, own.name),
            onChange: function onChange(event) {
                var processedEvent = own.onChange ? own.onChange(event) : event;
                return processedEvent && _onChange(processedEvent);
            }
        });
    })(component);
};

InputContainer.propTypes = _InputContainer2.default;

exports.default = InputContainer;