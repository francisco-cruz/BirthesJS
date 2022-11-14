import { createStitches } from "@stitches/react";

export const { css, styled } = createStitches({
  utils: {
 
  },

    theme: {
      colors: {
        black: {
          color: "#00000087"
        },
        blackMedium: {
          color: "#00000060"
        },
        blackDisable: {
          color: "#00000038"
        }
      },
      sizes: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "20px",
        5: '30px',
        6: '40px',
        7: '50px',
        8: "100%",
      },
  
      space: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "20px",
        5: "24px",
        6: "28px",
        7: "32px",
        8: "36px",
        9: "40px",
        10: "44px",
        11: "48px",
        12: "52px",
      },
  
      radii: {
        1: "0px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "24px",
      },
  
      fontSizes: {
        1: "12px",
        2: "14px",
        3: "16px",
        4: "18px",
        5: "20px",
        6: "22px",
        7: "24px",
        8: "28px",
        9: "32px",
        10: "48px",
        11: "56px",
        12: "64px",
      }
    },

    media: {
      bp1: "(max-width: 640px)",
      bp2: "(max-width: 768px)",
      bp3: "(max-width: 1024px)",
    },

  })