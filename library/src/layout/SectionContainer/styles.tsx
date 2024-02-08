import { Box, CSSObject, Theme, Typography, styled } from "@mui/material";

const getMainBoxMobileCSS = (theme: Theme): CSSObject => ({
  padding: theme.spacing(2.5, 0, 0),
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: theme.spacing(2.5),
  borderRadius: 0,
  backgroundColor: "transparent",
  boxShadow: "none",
});

const getTitleBoxMobileCSS = (theme: Theme): CSSObject => ({
  width: "100%",
});

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2.5),
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(6),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
  boxShadow: "0px 3px 15px 0px rgba(0, 0, 0, 0.15)",
  overflow: "auto",
  // screen mobile OR tablet
  [theme.breakpoints.down("laptop")]: {
    ...getMainBoxMobileCSS(theme),
    "> .titleBox": {
      ...getTitleBoxMobileCSS(theme),
    },
  },
  // force mobile mode
  "&.mobileMode": {
    ...getMainBoxMobileCSS(theme),
    "> .titleBox": {
      ...getTitleBoxMobileCSS(theme),
    },
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  width: "35%",
  minWidth: "min-content",
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: theme.spacing(1.25),
}));

const BodyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: theme.spacing(1.25),
}));

const TitleLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey["800"],
  flexShrink: 25,
  minWidth: "min-content",
  [theme.breakpoints.down("laptop")]: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

const ChipLabel = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.25, 1.5),
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.common.white,
  lineHeight: "normal",
  borderRadius: theme.spacing(2.5),
  backgroundColor: theme.palette.primary.main,
  flexShrink: 0,
  [theme.breakpoints.down("laptop")]: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

const customComponents = {
  MainBox,
  TitleBox,
  BodyBox,
  TitleLabel,
  ChipLabel,
};

export default customComponents;
