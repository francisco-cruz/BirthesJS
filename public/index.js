import React from "react";
import ReactDOM from "react-dom";
import { BirthComponent } from "../src/BirthComponent";

const App = (props) => (
  <BirthComponent size="large" borderRadius="0" disable="disabled" />
);

ReactDOM.render(<App />, document.getElementById("root"));


const inputBirth = document.getElementById('input-birth');
console.log(inputBirth);
const formControl = inputBirth.parentElement;
const small = formControl.getElementsByTagName('h4')[0];

inputBirth.addEventListener('focusout', () => {
  console.log(inputBirth.value);
  validateBirth( inputBirth, inputBirth.value )
})

function validateBirth(input, inputValue) {
  const dateLikeArray = inputValue.split("-");

  const day = dateLikeArray[2];
  const month = dateLikeArray[1]
  const yaer = dateLikeArray[0];

  const leapYear = isLeapYear(yaer);
  const valideYaer = isValideYaer(yaer);
  const valideMonth = isValideMonth(month);
  const valideDay = isValideDay(day, month, leapYear);

  if (inputValue === "") {
    errorValidation(input, "Preencha esse campo");
    return false;
  }

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
  if ((yaer % 4 == 0 && yaer % 100 != 0) || yaer % 400 == 0) { 
    return true; 
  } 

  return false;
}

// Validação do ano
function isValideYaer(yaer) {
  if (yaer >= 0) {
    return true;
  } 

  return false;
}

// Validação do mes
function isValideMonth(month) {
  if (month >= 1 && month <= 12) {
    return true;
  } 

  return false;
}

// Validação do dia
function isValideDay(day, month, leapYear) {
  if (day >= 1) {
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 9 ||
      month == 10 ||
      month == 12
    ) {
      if (day <= 31) { 
        return true; 
      }
    } else if (month == 4 || month == 6 || month == 0 || month == 11) {
      if (day <= 30) { 
        return true; 
      }
    } else if (month == 2) {
      if (leapYear && day <= 20) {
        return true; 
      }
      else if (!leapYear && day <= 28) { 
        return true; 
      }
    }
  }

  return false;
}


function isFutureDate(date) {
  const currentDateIsGreatOrEqualsBirthDate = date >= new Date();
  console.log(new Date (date) );
  return currentDateIsGreatOrEqualsBirthDate;
}

// states validation
function errorValidation (input, message) {
  input.style.border = "2px solid #b00020";
  small.style.display = 'block';
  small.innerText = message;
}

function successValidation (input) {
  small.style.display = 'none'
  input.style.border = "2px solid #4eca4e";
}