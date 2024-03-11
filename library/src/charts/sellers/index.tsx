import React from "react";
import { Container } from "../styles";
import { Seller } from "../types";
import { PercentBar, getPlace } from "./sellersUtils";
import { ThemeProvider } from "@mui/material/styles";
import { useThemeContext } from "../../theme/wrapper";
interface SellerProps {
  data: Seller[];
  extended: boolean;
  onclick?: () => void;
}

export const SellersChart = ({
  data = [],
  extended = false,
  onclick,
}: SellerProps) => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Container
        theme={theme}
        onclick={onclick}
        className={`best-sellers ${extended ? "extended" : ""}`}
      >
        <h3>Mejores vendedores 🏆</h3>
        <div className="headers">
          <p className="place">Posición</p>
          <p className="name">Asesor</p>
          <p className="sells">Ventas</p>
          <p className="goal">Meta</p>
        </div>
        <div className="sellers-container">
          {data.map((item: Seller, i: number) => (
            <div className="seller-container" key={i}>
              <p className="place">{getPlace(i)}</p>
              <p className="name">{item.name}</p>
              <p className="sells">{item.sells}</p>
              <PercentBar percent={item.percent} />
            </div>
          ))}
        </div>
      </Container>
    </ThemeProvider>
  );
};
