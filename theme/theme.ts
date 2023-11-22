import { createTheme } from "@mui/material";
import primaryFonts from "./fonts";
import colors from "./colors";
import components from "./components";
// import MuiButtonStyles from "./components/MuiButton";
// import * as styles from "./components"

// const mergeStyles = <T>(styleModules: T[]) =>
//   styleModules.reduce((acc, style) => ({ ...acc, ...style }), {} as T);

// const componentsStyles = mergeStyles(Object.values(styles));

const theme = createTheme({
  typography: primaryFonts,
  palette: colors,
  components: components
});

export default theme;
