import React from "react";
import PropTypes from "prop-types";
import SelectItem from "react-select-item";

const Select = ({children, selectItem, ...props}) => {
    if(selectItem === true) {
        return <SelectItem {...props}>
                {children}
              </SelectItem>;
    }

    return <select {...props}>
                {children}
           </select>
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Select;