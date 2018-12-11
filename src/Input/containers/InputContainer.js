import {connect} from "react-redux";
import dotProp from "dot-prop-immutable";
import {changeField, createBoundType} from "../ducks/Input";
import propTypes from "./InputContainer.proptypes";

const getFieldNamespace = nameProp =>
  (nameProp.split('.')[0]);


const prefixValue = (form, name) => {
    const splitted = name.split('.')
    splitted.splice(0,1)
    return [form,'', ...splitted].join('.')
}



const InputContainer = component =>
  connect(
    state => state,
    dispatch => ({
        dispatch,
    }),
    (state, dispatch, own) => {
        const namespace = getFieldNamespace(own.name);
        const onChange = event => {
            const type = createBoundType(namespace);

            if(!event.target) {
                const selected = [];
                event.map(function (o) {
                    selected.push(o.value);
                });
                dispatch.dispatch(changeField(type, own.name, selected.pop()));
                return dispatch.dispatch(changeField(type, own.name, event.join('|')));
            }
            const value = event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;

            if(event.target.type === 'select-multiple') {
                const arry = Array.from(event.target.selectedOptions);
                const selected = [];
                arry.map(function(o) {
                    selected.push(o.value);
                } );
                dispatch.dispatch(changeField(type, own.name, value));
                return dispatch.dispatch(changeField(type, own.name, selected.join('|')));

            } else {
                return dispatch.dispatch(changeField(type, own.name, value));
            }
        };
        const name = state[namespace] && state[namespace] ? prefixValue(namespace, own.name) : own.name
        const value = own.type === "radio" && own.value !== null ? own.value : (name && dotProp.get(state, name) !== undefined ? dotProp.get(state, name)  : '');

      return ({
            // Pass in received props first so defined props overwrite any preexisting ones.
            ...own,
            value: own.selectItem ? (value ? `${value}`.split('|') : []) : value,
            checked: (own.type === "radio" && own.value == dotProp.get(state, name)) || (own.type === "checkbox" && dotProp.get(state, name)),
            onChange: event => {
              const processedEvent = own.onChange ? own.onChange(event) : event;
              return processedEvent && onChange(processedEvent);
            },
        });
    },
)(component);

InputContainer.propTypes = propTypes;

export default InputContainer;