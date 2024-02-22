import React from "react";
import { Container } from "../styles";
import { City } from "../types";
import Image from "next/image";
import map from "../../assets/map.svg";
import { ThemeProvider } from "@mui/material/styles";
import { useThemeContext } from "../../theme/wrapper";

interface CitiesChartProps {
  data: City[];
  onclick: () => void;
}

export const CitiesChart = ({ data = [], onclick }: CitiesChartProps) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme} onclick={onclick} className="cities">
        <h3>Mejores ciudades</h3>
        {data.map((item: City, i: number) => (
          <div key={i} className="city-container">
            <Image src={map} alt="countries-background" fill />
            <p>Sales</p>
            <p className="value">
              {item.value > 1000
                ? (item.value / 1000).toFixed(1) + "k"
                : item.value}
            </p>
            <p className="city">{item.name}</p>
          </div>
        ))}
      </Container>
    </ThemeProvider>
  );
};
