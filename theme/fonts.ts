import { grey } from "@mui/material/colors";

const primaryFonts = {
  fontFamily: [
    'Inter',
    'Roboto',
  ].join(','),
  h6: {
    fontSize: 15,
  },
  h5: {
    fontSize: 17,
  },
  button: {
    fontSize: "1rem",
  },
  listItemPrimary: {
    fontSize: 14,
    color: grey[800],
    fontWeight: 500,
    lineHeight: "17px"
  },
  listItemSecondary: {
    fontSize: 14,
    color: grey[500],
    fontWeight: 500,
    lineHeight: "17px",
  },
};

export default primaryFonts;
