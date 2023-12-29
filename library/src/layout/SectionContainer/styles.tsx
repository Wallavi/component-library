import { Box, CSSObject, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

const mainBox_mobile: CSSObject = {
  padding: "20px 0px 0px 0px",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: 20,
  borderRadius: 0,
  backgroundColor: "transparent",
  boxShadow: "none",
};

const titleBox_mobile: CSSObject = {
  maxWidth: "100%",
};

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: 20,
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(6),
  borderRadius: 8,
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 15px 0px rgba(0, 0, 0, 0.15)",
  overflow: "auto",
  // screen mobile OR tablet
  [theme.breakpoints.down("laptop")]: {
    ...mainBox_mobile,
    "> .wallavi-titleBox": {
      ...titleBox_mobile,
    },
  },
  // force mobile mode
  "&.mobileMode": {
    ...mainBox_mobile,
    "> .wallavi-titleBox": {
      ...titleBox_mobile,
    },
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  width: "fit-content",
  minWidth: "100px",
  maxWidth: "40%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: 10,
}));

const BodyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: 10,
}));

const TitleLabel = styled(Typography)(({ theme }) => ({
  color: grey["800"],
  flexShrink: 25,
  minWidth: "min-content",
}));

const ChipLabel = styled(Typography)(({ theme }) => ({
  padding: "2px 12px",
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
  color: "#FFFFFF",
  lineHeight: "normal",
  borderRadius: 20,
  backgroundColor: theme.palette.primary.main,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  flexShrink: 1,
}));

const customComponents = {
  MainBox,
  TitleBox,
  BodyBox,
  TitleLabel,
  ChipLabel,
};

export default customComponents;
