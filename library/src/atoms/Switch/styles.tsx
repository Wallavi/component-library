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
    color: theme.palette.grey[800], // no selected
    ".MuiSwitch-input": {
      left: 0,
      width: "calc(90px + 17px)",
    },
    ".MuiSwitch-thumb": {
      width: 22,
      height: 22,
    },
    // state selected
    "&.Mui-checked": {
      color: theme.palette.primary.main,
      transform: "translateX(90px)",
      "&.Mui-disabled": {
        color: theme.palette.grey[600],
      },
      "+ .MuiSwitch-track": {
        opacity: 0.65,
        backgroundColor: theme.palette.primary.main,
      },
      ".MuiSwitch-input": {
        left: "calc(-90px + 17px)",
      },
    },
    // state disabled
    "&.Mui-disabled": {
      color: theme.palette.grey[600],
      "+ .MuiSwitch-track": {
        backgroundColor: theme.palette.grey[400],
        opacity: 1,
      },
    },
  },
  ".MuiSwitch-track": {
    width: 90,
    height: 14,
    marginTop: 1,
    backgroundColor: theme.palette.grey[400],
    opacity: 1,
  },
  // design tablet
  [theme.breakpoints.between("tablet", "laptop")]: {
    height: 32,
    padding: 16,
    ".MuiSwitch-switchBase": {
      width: 32,
      ".MuiSwitch-input": {
        width: "calc(60px + 16px)",
      },
      ".MuiSwitch-thumb": {
        width: 20,
        height: 20,
      },
      // state selected
      "&.Mui-checked": {
        transform: "translateX(60px)",
        ".MuiSwitch-input": {
          left: "calc(-60px + 16px)",
        },
      },
    },
    ".MuiSwitch-track": {
      width: 60,
      height: 13,
    },
  },
  // design mobile
  [theme.breakpoints.between("mobile", "tablet")]: {
    height: 30,
    padding: 15,
    ".MuiSwitch-switchBase": {
      width: 30,
      ".MuiSwitch-input": {
        width: "calc(35px + 15px)",
      },
      ".MuiSwitch-thumb": {
        width: 18,
        height: 18,
      },
      // state selected
      "&.Mui-checked": {
        transform: "translateX(35px)",
        ".MuiSwitch-input": {
          left: "calc(-35px + 15px)",
        },
      },
    },
    ".MuiSwitch-track": {
      width: 35,
      height: 12,
    },
  },
}));

const customComponents = {
  SwitchMUI,
};

export default customComponents;
