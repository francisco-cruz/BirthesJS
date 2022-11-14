import { createStitches } from "@stitches/react";

export const { css, styled } = createStitches({
  utils: {
 
  },

    theme: {
      colors: {
        backgroundDefault: 'white',
        backgroundDark: 'rgba(12, 12, 12, 0.93)',
        black: "rgba(0, 0, 0, 0.87)",
        blackMedium: "rgba(0, 0, 0, 0.60)",
        blackDisable: "rgba(0, 0, 0, 0.37)",
        white: "rgba(255, 255, 255, 0.87)",
        whiteMedium: "rgba(255, 255, 255, 0.60)",
        whiteDisable: "rgba(255, 255, 255, 0.37)",
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
      }
    },

    media: {
      bp1: "(max-width: 640px)",
      bp2: "(max-width: 768px)",
      bp3: "(max-width: 1024px)",
    },

  })