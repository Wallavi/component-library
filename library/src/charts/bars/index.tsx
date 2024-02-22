import React, { useEffect, useRef } from "react";
import { Container } from "../styles";
import { renderGraph } from "./barsUtils";
import { BarsChartData, Padding } from "../types";
import { useThemeContext } from "../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

export interface BarsChartProps {
  data: BarsChartData[];
  width?: number;
  height?: number;
  padding?: Padding;
  label?: string;
  onclick?: () => void;
}

export const BarsChart = ({
  data = [],
  width = 750,
  height = 230,
  padding = { left: 40, top: 40, right: 40, bottom: 40 },
  label = "",
  onclick,
}: BarsChartProps) => {
  const { theme } = useThemeContext();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    renderGraph(data, width, height, padding, label, svgRef, theme);
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme} onclick={onclick}>
        <svg ref={svgRef} width={width} height={height} />
      </Container>
    </ThemeProvider>
  );
};
