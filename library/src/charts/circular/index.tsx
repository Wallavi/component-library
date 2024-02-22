import React, { useEffect, useRef, useState } from "react";
import { Padding } from "../types";
import { chartColors } from "../utils";
import { getPercent, renderGraph } from "./circularUtils";
import { Container } from "../styles";
import { ThemeProvider } from "@mui/material/styles"; //uncomment this line to build
import { useThemeContext } from "../../theme/wrapper";
//import { ThemeProvider } from "../../theme/wrapper" //uncomment just for development;

export interface CircularChartData {
  label: string;
  value: number;
}

interface CircularChartProps {
  data: CircularChartData[];
  width?: number;
  height?: number;
  padding?: Padding;
  label?: string;
  type?: string;
  onclick?: () => void;
}

export const CircularChart = ({
  data = [],
  width = 190,
  height = 190,
  padding = { left: 20, top: 20, right: 20, bottom: 20 },
  label = "",
  type = "circular",
  onclick,
}: CircularChartProps) => {
  const { theme } = useThemeContext();
  const svgRef = useRef<SVGSVGElement>(null);
  const [total, setTotal] = useState<number>(0);
  const [colors, setColors] = useState<string[]>([]);
  const [dataShown, setDataShown] = useState<CircularChartData[]>([]);

  useEffect(() => {
    let count = 0;
    const colorArray: string[] = [...Object.values(chartColors)];
    data?.forEach((item, i) => {
      count += item.value;
    });

    if (type === "pie")
      setDataShown(data.sort((a, b) => b.value - a.value).slice(0, 2));
    else setDataShown(data.sort((a, b) => b.value - a.value));
    setColors(colorArray.reverse());
    setTotal(count);
    renderGraph(data, width, height, padding, svgRef, colorArray, type);
  }, [data, type]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        theme={theme}
        onclick={onclick}
        className={type === "pie" ? "pie" : "circular"}
      >
        <h3>{label}</h3>
        <div className="main-container">
          <div className="graph-container">
            <svg ref={svgRef} width={width} height={height} />
          </div>
          <div className="data-names">
            {dataShown.map((item: CircularChartData, i: number) => (
              <div key={i} className="data-name">
                <p className="name">
                  <span
                    className="color"
                    style={{
                      display: "inline-block",
                      backgroundColor: colors[i],
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  {item.label}
                </p>
                <p className="percent">{getPercent(item.value, total)}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};
