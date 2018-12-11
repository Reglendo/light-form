import dotProp from "dot-prop-immutable";

const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const INIT_FORM = 'INIT_FORM';
export const changeField = (type, name, value) => ({
    type,
    name,
    value,
});

export const createBoundType = namespace =>
    (UPDATE_INPUT_VALUE + '.' + namespace);

export default (namespace, defaultState, onStateChange, actionHandlers) =>
    (state = defaultState || {}, action) => {
        const boundType = createBoundType(namespace);

        const reducer = {
            [INIT_FORM]: (state,action) => {
                if(namespace === action.payload.form) {
                    return action.payload.data;
                }
                return state;
            },
            [boundType]: () => {
                const fieldPathWithoutNamespace = action.name.replace(namespace + '.', '');
                const newState = dotProp.set(state, fieldPathWithoutNamespace, action.value);
                return onStateChange && onStateChange(newState) || newState;
            },

            ...actionHandlers,
        };

        return reducer[action.type]
            ? reducer[action.type](state, action)
            : state;
    };
