import { createTheme } from "@mui/material/styles";
import primaryFonts from "./fonts";
import colors from "./colors";
import components from "./components";
import customBreakpoints from "./breakpoints";

const theme = createTheme({
  typography: primaryFonts,
  palette: colors,
  breakpoints: { values: customBreakpoints },
  // @ts-ignore
  components: components,
});

export default theme;
