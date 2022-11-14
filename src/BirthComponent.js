import React from 'react';
import { FormControl } from "./components/FormControl";
import { Input } from "./components/Input";
import { Small } from "./components/small";

export function BirthComponent() {
  return (
    <>
      <FormControl>
        <Input id="input-birth" type="date" />
        <Small />
      </FormControl>
    </>
  );
}
