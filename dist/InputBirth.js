"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputBirth = InputBirth;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment = _interopRequireDefault(require("moment/moment"));
var _FormControl = require("./components/FormControl");
var _Input = require("./components/Input");
var _Small = require("./components/Small");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function InputBirth(_ref) {
  var size = _ref.size,
    borderRadius = _ref.borderRadius,
    disabled = _ref.disabled,
    legalAge = _ref.legalAge;
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "input-birth",
    type: "date",
    size: size === "default" || size === "small" || size === "large" ? size : "default",
    radii: borderRadius === "1" || borderRadius === "2" || borderRadius === "3" || borderRadius === "4" || borderRadius === "5" ? borderRadius : "2",
    disable: disabled === "true" ? disabled : "false",
    "legal-age": legalAge.replace(/[^0-9]/g, "") != "" ? legalAge : alert("Invalid legalAge field value")
  }), /*#__PURE__*/_react["default"].createElement(_Small.Small, null));
}
InputBirth.propTypes = {
  size: _propTypes["default"].string,
  borderRadius: _propTypes["default"].string,
  disabled: _propTypes["default"].string,
  legalAge: _propTypes["default"].string
};
var inputBirth = document.getElementById("input-birth");
var formControl = inputBirth.parentElement;
var small = formControl.getElementsByTagName("h4")[0];
var ageLegalValue = parseInt(inputBirth.getAttribute("legal-age"));
var form = formControl.parentElement;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateBirth(inputBirth, inputBirth.value) ? form.submit() : false;
});
function validateBirth(input, inputValue) {
  var yaerBirth = (0, _moment["default"])(inputValue).format("YYYY");
  var age = (0, _moment["default"])().format("YYYY") - yaerBirth;
  var isNotLegalAge = age < ageLegalValue;
  var day = (0, _moment["default"])(inputValue).format("DD");
  var month = (0, _moment["default"])(inputValue).format("MM");
  var valideYaer = isValideYaer(yaerBirth);
  var validaeDate = isValideDate(day, month, yaerBirth);
  if (inputValue == "") {
    errorValidation(input, "Fill in this field.");
    return false;
  }
  if (isFutureDate(inputValue) || !validaeDate || !valideYaer) {
    errorValidation(input, "Invalid date.");
    return false;
  }
  if (ageLegalValue !== "" && isNotLegalAge) {
    errorValidation(input, "Prohibited minors");
    return false;
  }
  successValidation(inputBirth);
  return true;
}

// Validação do ano
function isValideYaer(yaer) {
  var lowestValidYear = 1892;
  return yaer >= lowestValidYear ? true : false;
}
function isValideDate(day, month, yaer) {
  var valideDay = (0, _moment["default"])("".concat(yaer, "/").concat(month, "/").concat(day)).format("l");
  return valideDay === "Invalid date" ? false : true;
}

// Validação de data futura
function isFutureDate(date) {
  return (0, _moment["default"])(date).isAfter((0, _moment["default"])());
}

// states validation
function errorValidation(input, message) {
  input.style.border = "1px solid #dc3545";
  small.style.display = "block";
  small.innerText = message;
}
function successValidation(input) {
  small.style.display = "none";
  input.style.border = "1px solid #198754";
}