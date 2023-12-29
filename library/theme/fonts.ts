import { grey } from "@mui/material/colors";

const fontFamily = ["Inter", "Roboto", '"Segoe UI"', "sans-serif"].join(",");

const primaryFonts = {
  fontFamily,
  htmlFontSize: 14,
  fontSize: 14,
  h4: {
    fontFamily,
    fontSize: 32,
  },
  h5: {
    fontFamily,
    fontSize: 17,
    fontWeight: 600,
  },
  h6: {
    fontFamily,
    fontSize: 15,
  },
  button: {
    fontFamily,
    fontSize: 14,
  },
  listItemPrimary: {
    fontFamily,
    fontSize: 14,
    color: grey[800],
    fontWeight: 500,
    lineHeight: "17px",
  },
  listItemSecondary: {
    fontFamily,
    fontSize: 14,
    color: grey[500],
    fontWeight: 500,
    lineHeight: "17px",
  },
  body1: {
    fontFamily,
    fontSize: 15,
    color: grey[800],
    fontWeight: 500,
    lineHeight: "17px",
  },
  body2: {
    fontFamily,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "17px",
  },
};

export default primaryFonts;
