import { createTheme } from '@mui/material/styles';
import theme from "../../theme";
import colors from "./colors";

const gohoTheme = createTheme(theme, {
  palette: colors,
});

export default gohoTheme;
