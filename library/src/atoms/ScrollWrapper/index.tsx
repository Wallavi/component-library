import React, { ReactNode } from "react";
import { styled } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "../../theme/wrapper";

const Container = styled("div")(({ theme }) => ({
  height: "100vh",
  boxSizing: "border-box",
}));

interface ScrollWrapperProps {
  children: ReactNode;
}

//this is the component to export
export const ScrollWrapper = ({ children }: ScrollWrapperProps) => (
  <Container
    sx={{
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "4px",
        background: "#B7B7CC",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#1E1E54",
      },
    }}
  >
    {children}
  </Container>
);

//this is only for sample
export const Scrollable = () => {
  const { theme } = useThemeContext();
  const numbersArray = Array.from({ length: 100 }, (_, i) => i + 1);
  return (
    <ThemeProvider theme={theme}>
      <ScrollWrapper>
        {numbersArray.map((n, i) => (
          <div key={i}>{n}</div>
        ))}
      </ScrollWrapper>
    </ThemeProvider>
  );
};
