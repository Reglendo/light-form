"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.TextArea = exports.Input = exports.Reducer = undefined;

var _Input = require("./Input/ducks/Input");

Object.defineProperty(exports, "Reducer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _InputContainer = require("./Input/containers/InputContainer");

var _InputContainer2 = _interopRequireDefault(_InputContainer);

var _Input2 = require("./Input/components/Input");

var _Input3 = _interopRequireDefault(_Input2);

var _TextArea = require("./Input/components/TextArea");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = require("./Input/components/Select");

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = exports.Input = (0, _InputContainer2.default)(_Input3.default);
var TextArea = exports.TextArea = (0, _InputContainer2.default)(_TextArea2.default);
var Select = exports.Select = (0, _InputContainer2.default)(_Select2.default);