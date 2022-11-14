import { styled } from "../stitches.config";

export const Input = styled("input", {
  fontSize: 18,
  fontWeight: 700,
  color: "$blackMedium",
  width: "100%",
  boxSizing: "border-box",
  borderRadius: 10,
  border: "1px solid #ccc",
  height: "$6",
  paddingLeft: 8,
  paddingRight: 8,
  outline: "none",
  "&:focus": {
    border: "1px solid $black",
    color: "red",
  },
  variants: {
    size: {
      small: {
        height: "$5",
      },
      large: {
        height: "$7",
      },
    },
    radii: {
      0: {
        borderRadius: "$0",
      },
      1: {
        borderRadius: "$1",
      },
      2: {
        borderRadius: "$2",
      },
      3: {
        borderRadius: "$3",
      },
      4: {
        borderRadius: "$4",
      },
      5: {
        borderRadius: "$5",
      },
    },
    disable: {
      disabled: {
        cursor: "none",
        pointerEvents: "none",
        color: "$blackDisable",
        opacity: ".4",
      },
    },
  },
});
