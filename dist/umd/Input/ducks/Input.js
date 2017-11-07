'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBoundType = exports.changeField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dotPropImmutable = require('dot-prop-immutable');

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
var INIT_FORM = 'INIT_FORM';
var changeField = exports.changeField = function changeField(type, name, value) {
    return {
        type: type,
        name: name,
        value: value
    };
};

var createBoundType = exports.createBoundType = function createBoundType(namespace) {
    return UPDATE_INPUT_VALUE + '.' + namespace;
};

exports.default = function (namespace, defaultState, onStateChange, actionHandlers) {
    return function () {
        var _extends2;

        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState || {};
        var action = arguments[1];

        var boundType = createBoundType(namespace);

        var reducer = _extends((_extends2 = {}, _defineProperty(_extends2, INIT_FORM, function (state, action) {
            if (namespace === action.payload.form) {
                return action.payload.data;
            }
            return state;
        }), _defineProperty(_extends2, boundType, function () {
            var fieldPathWithoutNamespace = action.name.replace(namespace + '.', '');
            var newState = _dotPropImmutable2.default.set(state, fieldPathWithoutNamespace, action.value);
            return onStateChange && onStateChange(newState) || newState;
        }), _extends2), actionHandlers);

        return reducer[action.type] ? reducer[action.type](state, action) : state;
    };
};