import { createTheme } from '@mui/material/styles';
import primaryFonts from "./fonts";
import colors from "./colors";
import components from "./components";

const theme = createTheme({
  typography: primaryFonts,
  palette: colors,
  // @ts-ignore
  components: components,
});

export default theme;
