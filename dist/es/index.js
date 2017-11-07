import InputContainer from "./Input/containers/InputContainer";
import InputComponent from "./Input/components/Input";
import TextAreaComponent from "./Input/components/TextArea";
import SelectComponent from "./Input/components/Select";
export { default as Reducer } from "./Input/ducks/Input";

export var Input = InputContainer(InputComponent);
export var TextArea = InputContainer(TextAreaComponent);
export var Select = InputContainer(SelectComponent);