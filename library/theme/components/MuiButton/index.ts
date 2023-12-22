import { grey } from "@mui/material/colors";

const MuiButtonStyles = {
  MuiButton: {
    styleOverrides: {
      root: `
        text-transform: none;
        box-shadow: none;
      `,
    },
    variants: [
      {
        props: { variant: 'filters' },
        style: {
          borderRadius: 8,
          textTransform: "none",
          color: grey[800],
          cursor: "pointer",
          marginRight: 2,
          ':hover': {
            backgroundColor: grey[50]
          }
        },
      },
    ],
  },
};

export default MuiButtonStyles;
