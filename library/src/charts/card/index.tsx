import React from "react";
import { CardData } from "charts/types";
import { Container } from "../styles";
import { ThemeProvider } from "@mui/material/styles";
import { useThemeContext } from "../../theme/wrapper";
import { Icon } from "@mui/material";

export const CardChart = ({
  label,
  value,
  percent,
  subLabel,
  icon,
  iconTheme = "gray",
  onclick,
}: CardData) => {
  const { theme } = useThemeContext();
  const IconComponent = icon;

  return (
    <ThemeProvider theme={theme}>
      <Container
        theme={theme}
        onclick={onclick}
        className="card"
        percentvalue={percent}
        icontheme={iconTheme}
      >
        {label && <h4>{label}</h4>}
        {value && <h3>{value}</h3>}
        <div className="percent-container">
          {percent && <p className="percent">{percent}%</p>}
          {subLabel && <p className="sub-label">{subLabel}</p>}
        </div>
        {IconComponent && (
          <div className="icon-container">
            <Icon>
              <IconComponent />
            </Icon>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
};
