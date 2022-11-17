import React from "react";
import ReactDOM from 'react-dom/client';
import FormBirth from "../src/FormBirth";
import InputBirth  from "../src/InputBirth";

const App = () => (
    <FormBirth>
      <InputBirth
        size={"large"}
        legalAge={"12"}
        borderRadius={"5"}
        disabled={""}
      />
      <button type="subit">Enviar</button>
    </FormBirth>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
