"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment = _interopRequireDefault(require("moment/moment"));
var _FormControl = require("./components/FormControl");
var _Input = require("./components/Input");
var _Small = require("./components/Small");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function InputBirth(_ref) {
  var size = _ref.size,
    borderRadius = _ref.borderRadius,
    disabled = _ref.disabled,
    legalAge = _ref.legalAge;
  var init = function init() {
    var inputBirth = document.getElementById("input-birth");
    var formControl = inputBirth.parentElement;
    var small = formControl.getElementsByTagName("h4")[0];
    var ageLegalValue = parseInt(inputBirth.getAttribute("legal-age"));
    var form = formControl.parentElement;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      validateBirth(inputBirth, inputBirth.value) ? form.submit() : false;
    });
    var validateBirth = function validateBirth(input, inputValue) {
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
    };

    // Validation of Yaer
    var isValideYaer = function isValideYaer(yaer) {
      var lowestValidYear = 1892;
      return yaer >= lowestValidYear ? true : false;
    };
    var isValideDate = function isValideDate(day, month, yaer) {
      var valideDay = (0, _moment["default"])("".concat(yaer, "/").concat(month, "/").concat(day)).format("l");
      return valideDay === "Invalid date" ? false : true;
    };

    // Validation of the future date
    var isFutureDate = function isFutureDate(date) {
      return (0, _moment["default"])(date).isAfter((0, _moment["default"])());
    };

    // states validation
    var errorValidation = function errorValidation(input, message) {
      input.style.border = "1px solid #dc3545";
      small.style.display = "block";
      small.innerText = message;
    };
    var successValidation = function successValidation(input) {
      small.style.display = "none";
      input.style.border = "1px solid #198754";
    };
  };
  (0, _react.useEffect)(function () {
    init();
  }, []);
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
var _default = InputBirth;
exports["default"] = _default;