import React from "react";
import { ScrollWrapper } from "./styles";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "../../theme/wrapper";

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
