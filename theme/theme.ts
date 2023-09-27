import { createTheme } from "@mui/material";
import primaryFonts from "./fonts";
import colors from "./colors";

const theme = createTheme({
  typography: primaryFonts,
  palette: colors,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
