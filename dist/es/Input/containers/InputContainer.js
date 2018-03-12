var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { connect } from "react-redux";
import dotProp from "dot-prop-immutable";
import { changeField, createBoundType } from "../ducks/Input";
import propTypes from "./InputContainer.proptypes";

var getFieldNamespace = function getFieldNamespace(nameProp) {
    return nameProp.split('.')[0];
};

var InputContainer = function InputContainer(component) {
    return connect(function (state) {
        return state;
    }, function (dispatch) {
        return {
            dispatch: dispatch
        };
    }, function (state, dispatch, own) {
        var _onChange = function _onChange(event) {
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            var namespace = getFieldNamespace(own.name);
            var type = createBoundType(namespace);

            if (event.target.type === 'select-multiple') {
                var arry = Array.from(event.target.selectedOptions);
                var selected = [];
                arry.map(function (o) {
                    selected.push(o.value);
                });
                dispatch.dispatch(changeField(type, own.name, value));
                return dispatch.dispatch(changeField(type, own.name, selected.join('|')));
            } else {
                return dispatch.dispatch(changeField(type, own.name, value));
            }

            return dispatch.dispatch(changeField(type, own.name, value));
        };

        var value = own.type === "radio" && own.value !== null ? own.value : own.name && dotProp.get(state, own.name) !== undefined ? dotProp.get(state, own.name) : '';

        return _extends({}, own, {
            value: own.selectItem ? value ? value.split('|') : [] : value,
            checked: own.type === "radio" && own.value == dotProp.get(state, own.name) || own.type === "checkbox" && dotProp.get(state, own.name),
            onChange: function onChange(event) {
                var processedEvent = own.onChange ? own.onChange(event) : event;
                return processedEvent && _onChange(processedEvent);
            }
        });
    })(component);
};

InputContainer.propTypes = propTypes;

export default InputContainer;