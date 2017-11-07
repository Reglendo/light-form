var errorMessage = function errorMessage(propName, componentName, customMessage) {
  return 'Invalid property \'' + propName + '\' supplied to \'' + componentName + '\'. ' + customMessage;
};

var validateNameProp = function validateNameProp(props, propName, componentName) {
  if (typeof props[propName] !== 'string') {
    return new Error(errorMessage(propName, componentName, 'Value must be a valid string.'));
  }

  if (!/.+\..+/.test(props[propName])) {
    return new Error(errorMessage(propName, componentName, 'Value must contain a dot-delimited namespace. (eg. name="customer.firstname")'));
  }
};

var validateOnChangeProp = function validateOnChangeProp(props, propName, componentName) {
  if (typeof props[propName] !== 'function') {
    return new Error(errorMessage(propName, componentName, 'Value must be a function.'));
  }
};

export default {
  name: validateNameProp,
  onChange: validateOnChangeProp
};