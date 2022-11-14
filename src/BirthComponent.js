import React from 'react';
import { FormControl } from "./components/FormControl";
import { Input } from "./components/Input";
import { Small } from "./components/small";

export function BirthComponent(props) {
  return (
    <>
      <FormControl>
        <Input id="input-birth" type="date" size={props.size} radii={props.borderRadius} disable={props.disabled}/>
        <Small />
      </FormControl>
    </>
  );
}
