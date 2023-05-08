import { createTheme } from "@mui/material";
import primaryFonts from "./fonts"
import colors from './colors';

const theme = createTheme({
  typography: primaryFonts,
  palette: colors
})

export default theme