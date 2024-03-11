import React from "react";
import { styled, Box } from "@mui/material";

const getPercentColor = (percent: number) => {
  if (percent >= 50) return "#00A99D";
  if (percent >= 25 && percent < 50) return "#212159";
  return "#EA456D";
};

interface PercentBarContainerProps {
  value: number;
}

const PercentBarContainer = styled(Box)(
  ({ value = 0 }: PercentBarContainerProps) => ({
    display: "flex",
    minWidth: "150px",
    alignItems: "center",

    p: {
      minWidth: "40px",
      textAlign: "left !important",
      fontSize: "10px",
      "&+*": { marginLeft: "5px" },
    },

    ".percent": {
      width: `${value}%`,
      height: "3px",
      backgroundColor: getPercentColor(value),
    },
  })
);

export const getPlace = (place: number) => {
  switch (place) {
    case 0:
      return "1st 🥇";
    case 1:
      return "2nd 🥈";
    case 2:
      return "3rd 🥉";
    default:
      return `${place + 1}th`;
  }
};

export const PercentBar = ({ percent = 0 }) => {
  return (
    <PercentBarContainer value={percent}>
      <p>{percent}%</p>
      <div className="percent" />
    </PercentBarContainer>
  );
};
