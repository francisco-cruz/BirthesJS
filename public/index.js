import React from "react";
import ReactDOM from "react-dom";
import moment from "moment/moment";
import { BirthComponent } from "../src/BirthComponent";

const App = () => (
  <>
    <form>
      <BirthComponent size="large" borderRadius="0" legalAge="18"/>
      <button type="subit">Enviar</button>
    </form>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

const inputBirth = document.getElementById("input-birth");
const formControl = inputBirth.parentElement;
const small = formControl.getElementsByTagName("h4")[0];
const ageLegalValue = parseInt(inputBirth.getAttribute("legal-age"));
const form = formControl.parentElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateBirth(inputBirth, inputBirth.value) ? form.submit() : false;
});

function validateBirth(input, inputValue) {
  const yaerBirth = moment(inputValue).format("YYYY");
  const age = moment().format("YYYY") - yaerBirth;
  const isNotLegalAge = age < ageLegalValue;
  const day = moment(inputValue).format("DD");
  const month = moment(inputValue).format("MM");

  const valideYaer = isValideYaer(yaerBirth);
  const validaeDate = isValideDate(day, month, yaerBirth);

  if (inputValue == "") {
    errorValidation(input, "Preencha esse campo.");
    return false;
  }

  if (isFutureDate(inputValue) || !validaeDate || !valideYaer) {
    errorValidation(input, "Data inválida.");
    return false;
  }

  if (ageLegalValue !== "" && isNotLegalAge) {
    errorValidation(input, `Proíbido para menores de ${ageLegalValue} Anos.`);
    return false;
  }

  successValidation(inputBirth);
  return true;
}

// Validação do ano
function isValideYaer(yaer) {
  const lowestValidYear = 1892;
  return yaer >= lowestValidYear ? true : false;
}

function isValideDate(day, month, yaer) {
  const valideDay = moment(`${yaer}/${month}/${day}`).format("l");
  return valideDay === "Invalid date" ? false : true;
}

// Validação de data futura
function isFutureDate(date) {
  return moment(date).isAfter(moment());
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
