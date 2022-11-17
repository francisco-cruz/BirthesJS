import React from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import { FormControl } from "./components/FormControl";
import { Input } from "./components/Input";
import { Small } from "./components/Small";

function InputBirth({ size, borderRadius, disabled, legalAge }) {
  return (
    <FormControl>
      <Input
        id="input-birth"
        type="date"
        size={
          size === "default" || size === "small" || size === "large"
            ? size
            : "default"
        }
        radii={
          borderRadius === "1" ||
          borderRadius === "2" ||
          borderRadius === "3" ||
          borderRadius === "4" ||
          borderRadius === "5"
            ? borderRadius
            : "2"
        }
        disable={disabled === "true" ? disabled : "false"}
        legal-age={
          legalAge.replace(/[^0-9]/g, "") != ""
            ? legalAge
            : alert("Invalid legalAge field value")
        }
      />
      <Small />
    </FormControl>
  );
}

InputBirth.propTypes = {
  size: PropTypes.string,
  borderRadius: PropTypes.string,
  disabled: PropTypes.string,
  legalAge: PropTypes.string,
};


// const inputBirth = document.getElementById("input-birth");
  // const formControl = inputBirth.parentElement;
  // const small = formControl.getElementsByTagName("h4")[0];
  // const ageLegalValue = parseInt(inputBirth.getAttribute("legal-age"));
  // const form = formControl.parentElement;

  // function init() {
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     validateBirth(inputBirth, inputBirth.value) ? form.submit() : false;
  //   });
  // }

  // React.useEffect(() => {
  //   init();
  // }, []);

  // function validateBirth(input, inputValue) {
  //   const yaerBirth = moment(inputValue).format("YYYY");
  //   const age = moment().format("YYYY") - yaerBirth;
  //   const isNotLegalAge = age < ageLegalValue;
  //   const day = moment(inputValue).format("DD");
  //   const month = moment(inputValue).format("MM");

  //   const valideYaer = isValideYaer(yaerBirth);
  //   const validaeDate = isValideDate(day, month, yaerBirth);

  //   if (inputValue == "") {
  //     errorValidation(input, "Fill in this field.");
  //     return false;
  //   }

  //   if (isFutureDate(inputValue) || !validaeDate || !valideYaer) {
  //     errorValidation(input, "Invalid date.");
  //     return false;
  //   }

  //   if (ageLegalValue !== "" && isNotLegalAge) {
  //     errorValidation(input, `Prohibited minors`);
  //     return false;
  //   }

  //   successValidation(inputBirth);
  //   return true;
  // }

  // // Validação do ano
  // function isValideYaer(yaer) {
  //   const lowestValidYear = 1892;
  //   return yaer >= lowestValidYear ? true : false;
  // }

  // function isValideDate(day, month, yaer) {
  //   const valideDay = moment(`${yaer}/${month}/${day}`).format("l");
  //   return valideDay === "Invalid date" ? false : true;
  // }

  // // Validação de data futura
  // function isFutureDate(date) {
  //   return moment(date).isAfter(moment());
  // }

  // // states validation
  // function errorValidation(input, message) {
  //   input.style.border = "1px solid #dc3545";
  //   small.style.display = "block";
  //   small.innerText = message;
  // }

  // function successValidation(input) {
  //   small.style.display = "none";
  //   input.style.border = "1px solid #198754";
  // }

export default InputBirth;
