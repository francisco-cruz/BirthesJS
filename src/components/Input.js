import { styled } from "../stitches.config";

export const Input = styled("input", {
  fontWeight: 700,
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: 8,
  paddingRight: 8,
  outline: "none",
  variants: {
    theme: {
      default: {
        backgroundColor: "white",
        color: "$blackMedium",
        border: "1px solid $blackMedium",
        "&:focus": {
          border: "1px solid $black",
          color: "$black",
        }
      },
      dark: {
        backgroundColor: "$backgroundDark",
        color: "$whiteMedium",
        border: "1px solid $whiteMedium",
        "&:focus": {
          border: "1px solid $white",
          color: "$white",
        }
      },
    },
    size: {
      small: {
        height: "$5",
        fontSize: "$2",
      },
      default: {
        height: "$6",
        fontSize: "$3",
      },
      large: {
        height: "$7",
        fontSize: "$4",
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
  defaultVariants: {
    theme: 'default',
    size: 'default',
    radii: "2"
  },
});
