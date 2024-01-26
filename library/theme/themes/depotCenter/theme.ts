import { createTheme } from "@mui/material/styles";
import theme from "../../theme";
import colors from "./colors";

const depotCenterTheme = createTheme(theme, {
  palette: colors,
});

export default depotCenterTheme;
