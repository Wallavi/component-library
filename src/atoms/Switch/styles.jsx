import { Switch, styled } from "@mui/material";

const SwitchMUI = styled(Switch)(({ theme }) => ({
  width: "fit-content",
  height: 34,
  padding: 17,
  alignItems: "center",
  ".MuiSwitch-switchBase": {
    width: 34,
    height: "auto",
    top: 0,
    bottom: 0,
    padding: 0,
    color: "#424242", // no selected
    ".MuiSwitch-input": {
      left: 0,
      width: "calc(90px + 17px)",
    },
    // state selected
    "&.Mui-checked": {
      color: theme.palette.primary.main,
      transform: "translateX(90px)",
      "&.Mui-disabled": {
        color: "#757575",
      },
      "+ .MuiSwitch-track": {
        opacity: 0.65,
      },
      ".MuiSwitch-input": {
        left: "calc(-90px + 17px)",
      },
    },
    // state disabled
    "&.Mui-disabled": {
      color: "#757575",
      "+ .MuiSwitch-track": {
        backgroundColor: "#BDBDBD",
        opacity: 1,
      },
    },
  },
  ".MuiSwitch-track": {
    width: 90,
    height: 14,
    marginTop: 1,
    backgroundColor: "#BDBDBD",
    opacity: 1,
  },
}));

const components = {
  SwitchMUI,
};

export default components;
