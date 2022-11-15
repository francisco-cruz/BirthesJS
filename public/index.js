import React from "react";
import ReactDOM from "react-dom";
import { BirthComponent } from "../src/BirthComponent";

const App = () => (
  <>
    <BirthComponent legalAge="enable" />
    <button>enviar</button>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

const inputBirth = document.getElementById("input-birth");
const formControl = inputBirth.parentElement;
const small = formControl.getElementsByTagName("h4")[0];
const button = document.getElementsByTagName("button")[0];
const isLegalAge = inputBirth.getAttribute('legal-age')


button.addEventListener("click", () => {
  validateBirth(inputBirth, inputBirth.value);
});

function validateBirth(input, inputValue) {
  const dateLikeArray = inputValue.split("-");
  const day = dateLikeArray[2];
  const month = dateLikeArray[1];
  const yaer = dateLikeArray[0];
  const leapYear = isLeapYear(yaer);
  const valideYaer = isValideYaer(yaer);
  const valideMonth = isValideMonth(month);
  const valideDay = isValideDay(day, month, leapYear);

  if (inputValue === "") {
    errorValidation(input, "Preencha esse campo");
    return false;
  }

  if (isLegalAge)

  if (isFutureDate(inputValue) || !(valideYaer && valideMonth && valideDay)) {
    errorValidation(input, "Data inválida");
    return false;
  }

  successValidation(inputBirth);
  return true;
}

// Múltiplos de 4, mas que não são múltiplos de 100.
// Todos os não múltiplos de 400 são bissextos.
function isLeapYear(yaer) {
  const remainderOfDivisionByFourIsEqualsZero = yaer % 4 == 0;
  const remainderOfDivisionByHundredIsDifferentFromZero = yaer % 100 != 0;
  const remainderOfDivisionByFourHundredIsEqualsZero = yaer % 400 == 0;

  return (remainderOfDivisionByFourIsEqualsZero &&
    remainderOfDivisionByHundredIsDifferentFromZero) ||
    remainderOfDivisionByFourHundredIsEqualsZero
    ? true
    : false;
}

// Validação do ano
function isValideYaer(yaer) {
  const yaerIsEqualsOrBiggerThatZero = yaer >= 1892;
  return yaerIsEqualsOrBiggerThatZero ? true : false;
}

// Validação do mes
function isValideMonth(month) {
  const monthIsBiggerThanOne = month >= 1;
  const monthIsSmallerThanTwelve = month <= 12;
  return monthIsBiggerThanOne && monthIsSmallerThanTwelve ? true : false;
}

// Validação do dia
//
// erro na validação de dia
//
function isValideDay(day, month, leapYear) {
  const January = month == 1;
  const February = month == 2;
  const March = month == 3;
  const April = month == 4;
  const May = month == 5;
  const June = month == 6;
  const July = month == 7;
  const August = month == 8;
  const September = month == 9;
  const October = month == 10;
  const November = month == 11;
  const December = month == 12;
  const dayIsSmallerOrEqualsThanThirty = day <= 30;
  const dayIsSmallerOrEqualsThanTwentyNine = day <= 29;
  const dayIsSmallerOrEqualsThanTwentyEight = day <= 28;


  
  return January || March || May || July || August || October || December
    ? true
    : April || June || September || November
    ? dayIsSmallerOrEqualsThanThirty
      ? true
      : February
      ? leapYear && dayIsSmallerOrEqualsThanTwentyNine
        ? true
        : !leapYear && dayIsSmallerOrEqualsThanTwentyEight
        ? true
        : false
      : false
    : false;
}

function isFutureDate(date) {
  const currentDateIsGreatOrEqualsBirthDate = date >= new Date();
  return currentDateIsGreatOrEqualsBirthDate;
}

// states validation
function errorValidation(input, message) {
  input.style.border = "2px solid #b00020";
  small.style.display = "block";
  small.innerText = message;
}

function successValidation(input) {
  small.style.display = "none";
  input.style.border = "2px solid #4eca4e";
}
