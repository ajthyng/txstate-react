"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(props) {
  var children = props.children,
      className = props.className;
  return _react.default.createElement("span", {
    className: className
  }, children);
};

exports.Text = Text;