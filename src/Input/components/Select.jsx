import React from "react";
import PropTypes from "prop-types";

const Select = ({children, element, ...props}) => {
    if(element) {
        const Element = props._currentElement
        return <Element {...props}>
                    {children}
                </Element>
    }
    return <select {...props}>
            {children}
          </select>;
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Select;