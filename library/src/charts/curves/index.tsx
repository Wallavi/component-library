import React, { useEffect, useRef, useState } from "react";
import { Container } from "../styles";
import { renderGraph } from "./curvesUtils";
import { randomColor } from "../utils";
import { useThemeContext } from "../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

interface ChartProps {
  data: Object;
  type?: string;
  width?: number;
  height?: number;
  padding?: number;
  yTickCount?: number;
  showLines?: boolean;
  tension?: number;
  colors?: string[];
  label?: string;
  subLabel?: string;
  showInfo?: boolean;
  onclick?: () => void;
}

export const CurvesChart = ({
  data = {},
  width = 600,
  height = 250,
  padding = 20,
  yTickCount = 6,
  showLines = false,
  tension = 0,
  colors = [],
  label = "Ventas netas",
  subLabel = "Status de la operación",
  showInfo = true,
  onclick,
}: ChartProps) => {
  const { theme } = useThemeContext();
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string[]>([]);

  const validateColor = (data: Object, colors: string[]) => {
    const dataSize = Object.values(data);
    if (!colors) {
      colors = [];
      dataSize.forEach((_: any, i: number) => {
        colors.push(randomColor());
      });
    } else if (colors.length !== dataSize.length) {
      dataSize.forEach((_: any, i: number) => {
        if (!colors[i]) colors.push(randomColor());
      });
    }
    return colors;
  };

  useEffect(() => {
    if (data) {
      const colorArray = validateColor(data, colors);
      setColor(colorArray);
      renderGraph(
        data,
        width,
        height,
        padding,
        svgRef,
        tooltipRef,
        yTickCount,
        showLines,
        tension,
        colorArray,
        theme
      );
    }
  }, [data, tension]);

  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme} onclick={onclick} className="curves">
        <div
          className="info-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {label && <h2>{label}</h2>}
          {showInfo && (
            <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
              <h3>{subLabel}</h3>|{" "}
              {Object.keys(data).map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: color[i],
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
          <div className="comparatives"></div>
        </div>
        <svg ref={svgRef} width={width} height={height} />
        <div
          ref={tooltipRef}
          className="tooltip"
          style={{ display: "none" }}
        ></div>
      </Container>
    </ThemeProvider>
  );
};
