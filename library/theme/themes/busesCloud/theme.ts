import { createTheme } from "@mui/material/styles";
import theme from "../../theme";
import colors from "./colors";

const busesCloudTheme = createTheme(theme, { palette: colors });

export default busesCloudTheme;
