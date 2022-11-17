import React from "react";
import { FormControl } from "./components/FormControl";
import { Input } from "./components/Input";
import { Small } from "./components/Small";
import PropTypes from "prop-types";

export function InputBirth({ size, borderRadius, disabled, legalAge }) {
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
          legal-age={legalAge.replace(/[^0-9]/g, "") !="" ? legalAge : alert("Invalid legalAge field value")}
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
