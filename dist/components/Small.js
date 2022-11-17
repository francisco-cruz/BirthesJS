"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Small = void 0;
var _stitches = require("../stitches.config");
var _styled;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Small = (0, _stitches.styled)("h4", (_styled = {
  display: "none",
  fontSize: '$3',
  fontWeight: 100,
  marginTop: "0.25rem"
}, _defineProperty(_styled, "fontSize", ".875em"), _defineProperty(_styled, "color", "#dc3545"), _defineProperty(_styled, "fontFamily", "$1"), _styled));
exports.Small = Small;