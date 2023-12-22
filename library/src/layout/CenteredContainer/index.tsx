import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { errorAnimation } from "../../styles";

interface CenteredContainerProps extends BoxProps {
  error?: boolean;
}

const CenteredContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "error",
})<CenteredContainerProps>(({ error, theme }) => ({
  ...errorAnimation,
  position: "fixed",
  width: 400,
  borderRadius: "10px",
  left: "50%",
  top: "50%",
  background: "white",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "35px",
  ...(error && {
    animationName: `errorAlertFixed`,
    animationDuration: "0.3s",
    animationIterationCount: 3,
  }),
}));

export default CenteredContainer;
