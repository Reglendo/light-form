var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { connect } from "react-redux";
import dotProp from "dot-prop-immutable";
import { changeField, createBoundType } from "../ducks/Input";
import propTypes from "./InputContainer.proptypes";

var getFieldNamespace = function getFieldNamespace(nameProp) {
    return nameProp.split('.')[0];
};

var prefixValue = function prefixValue(form, name) {
    var splitted = name.split('.');
    splitted.splice(0, 1);
    return [form, ''].concat(_toConsumableArray(splitted)).join('.');
};

var InputContainer = function InputContainer(component) {
    return connect(function (state) {
        return state;
    }, function (dispatch) {
        return {
            dispatch: dispatch
        };
    }, function (state, dispatch, own) {
        var namespace = getFieldNamespace(own.name);
        var _onChange = function _onChange(event) {
            var type = createBoundType(namespace);

            if (!event.target) {
                var selected = [];
                event.map(function (o) {
                    selected.push(o.value);
                });
                dispatch.dispatch(changeField(type, own.name, selected.pop()));
                return dispatch.dispatch(changeField(type, own.name, event.join('|')));
            }
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

            if (event.target.type === 'select-multiple') {
                var arry = Array.from(event.target.selectedOptions);
                var _selected = [];
                arry.map(function (o) {
                    _selected.push(o.value);
                });
                dispatch.dispatch(changeField(type, own.name, value));
                return dispatch.dispatch(changeField(type, own.name, _selected.join('|')));
            } else {
                return dispatch.dispatch(changeField(type, own.name, value));
            }
        };
        var name = state[namespace] && state[namespace] ? prefixValue(namespace, own.name) : own.name;
        var value = own.type === "radio" && own.value !== null ? own.value : name && dotProp.get(state, name) !== undefined ? dotProp.get(state, name) : '';

        return _extends({}, own, {
            value: own.selectItem ? value ? ("" + value).split('|') : [] : value,
            checked: own.type === "radio" && own.value == dotProp.get(state, name) || own.type === "checkbox" && dotProp.get(state, name),
            onChange: function onChange(event) {
                var processedEvent = own.onChange ? own.onChange(event) : event;
                return processedEvent && _onChange(processedEvent);
            }
        });
    })(component);
};

InputContainer.propTypes = propTypes;

export default InputContainer;