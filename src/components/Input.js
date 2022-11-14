import { styled } from "@stitches/react";

export const Input = styled("input", {
  fontSize: 18,
  fontWeight: 700,
  color: "#808080",
  width: "100%",
  boxSizing: "border-box",
  borderRadius: 10,
  border: "2px solid #ccc",
  height: 50,
  paddingLeft: 8,
  paddingRight: 8,
  outline: 'none',
  '&:hover':{
    cursor: 'pointer'
  }
});
