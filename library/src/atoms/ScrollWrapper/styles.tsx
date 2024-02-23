import { styled } from "@mui/material";

export const ScrollWrapper = styled("div")(({ theme }) => ({
  height: "100vh",
  boxSizing: "border-box",

  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: theme.palette.primary.light,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "4px",
    background: theme.palette.primary.main,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: theme.palette.primary.contrastText,
  },
}));
