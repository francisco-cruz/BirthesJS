import React from "react";
import { FormControl } from "./components/FormControl";
import { Input } from "./components/Input";
import { Small } from "./components/small";

export function BirthComponent(props) {
  return (
    <>
      <FormControl>
        <Input
          id="input-birth"
          type="date"
          theme={props.theme}
          size={props.size}
          radii={props.borderRadius}
          disable={props.disable}
          legal-age={props.legalAge ?? "disabled" }
        />
        <Small />
      </FormControl>
    </>
  );
}
