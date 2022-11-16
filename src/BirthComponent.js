import React from "react";
import { FormControl } from "./components/FormControl";
import { Input } from "./components/Input";
import { Small } from "./components/Small";

export function BirthComponent(props) {
  return (
    <>
      <FormControl>
        <Input
          id="input-birth"
          type="date"
          size={props.size}
          radii={props.borderRadius}
          disable={props.disable}
          legal-age={props.legalAge}
        />
        <Small />
      </FormControl>
    </>
  );
}
