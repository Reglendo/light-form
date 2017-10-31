import {connect} from "react-redux";
import dotProp from "dot-prop-immutable";
import {changeField, createBoundType} from "../ducks/Input";
import propTypes from "./InputContainer.proptypes";

const getFieldNamespace = nameProp =>
  (nameProp.split('.')[0]);

const InputContainer = component =>
  connect(
    state => state,
    dispatch => ({
        dispatch,
    }),
    (state, dispatch, own) => {
        const onChange = event => {
            const value = event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;

            const namespace = getFieldNamespace(own.name);
            const type = createBoundType(namespace);
            return dispatch.dispatch(changeField(type, own.name, value));
        };

        var value = own.type === "radio" && own.value !== null ? own.value : (own.name && dotProp.get(state, own.name) !== undefined ? dotProp.get(state, own.name)  : '');

        return _extends({}, own, {
            value: value,
            checked: (own.type === "radio" && own.value == dotProp.get(state, own.name)) || (own.type === "checkbox" && dotProp.get(state, own.name)),
            onChange: function onChange(event) {
                var processedEvent = own.onChange ? own.onChange(event) : event;
                return processedEvent && _onChange(processedEvent);
            }
        });
    },
)(component);

InputContainer.propTypes = propTypes;

export default InputContainer;