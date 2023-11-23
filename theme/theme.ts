import { createTheme } from "@mui/material";
import primaryFonts from "./fonts";
import colors from "./colors";
import components from "./components";

const theme = createTheme({
  typography: primaryFonts,
  palette: colors,
  components: components,
});

export default theme;
