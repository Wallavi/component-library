import React from "react";
import { styled } from "@mui/material/styles";

import Tooltip, {
  TooltipProps,
  tooltipClasses,
} from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    width: "max-content",
    maxWidth: "400px",
    padding: theme.spacing(1.5),
    background: "#dfe2e6",
    color: theme.palette.primary.dark,
    boxShadow: "-2px 4px 5px 1px rgba(0, 0, 0, 0.2)",
    borderRadius: theme.spacing(1.25),
    textAlign: "center",
  },
}));

export default LightTooltip;
