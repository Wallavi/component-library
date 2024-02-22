import { BarsChartData } from "../types";
import { RefObject } from "react";
import * as d3 from "d3";
import { chartColors } from "../utils";

export interface Padding {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export const renderGraph = (
  data: BarsChartData[],
  width: number,
  height: number,
  padding: Padding = { left: 40, top: 40, right: 40, bottom: 40 },
  label: string = "",
  svgRef: RefObject<SVGSVGElement>,
  theme: any
) => {
  // Select the svg object to render the graph
  const svg = d3.select(svgRef.current);

  // remove any render before the newest
  svg.selectAll("*").remove();

  const xDomain = d3.extent(data, (d) => d.date);
  const yDomain = [d3.max(data, (d) => d.value), 0];

  const xValid = xDomain as [Date, Date];
  const yValid = yDomain as [number, number];

  // Creates x scale
  const xScale = d3
    .scaleTime()
    .domain(xValid)
    .range([padding.left + 10, width - padding.right]);

  // Creates y scale
  const yScale = d3
    .scaleLinear()
    .domain(yValid)
    .range([padding.bottom, height - padding.top]);

  // Add the width and height to svg container
  svg.attr("width", width).attr("height", height);

  const rowWidth = width / data.length <= 28 ? width / data.length : 28;
  const colorsArray: string[] = [];
  const barsColors = Object.values(chartColors);
  let colorIndex = 0;

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(d.date))
    .attr("y", height - padding.bottom)
    .attr("cursor", "pointer")
    .attr("width", rowWidth)
    .attr("height", 0)
    .attr("fill", () => {
      const color = barsColors[colorIndex];
      colorsArray.push(color);
      colorIndex >= 4 ? (colorIndex = 0) : colorIndex++;
      return color;
    })
    .attr("rx", 5)
    .attr("ry", 5)
    .transition()
    .duration(500)
    .attr("y", (d) => yScale(d.value))
    .attr("height", (d) => height - yScale(d.value) - padding.bottom)
    .attr("data-index", (_, i) => i);

  svg
    .selectAll("rect")
    .on("mouseover", (e, d) =>
      mouseOver(e, d, rowWidth, svg, xScale, yScale, theme)
    )
    .on("mouseout", (e, d) => mouseOut(e, svg, colorsArray));

  // Creates x axis
  const xAxis = d3.axisBottom(xScale).ticks(data.length);
  xAxis.tickFormat((date: any) => {
    const format = d3.timeFormat("%b");
    return format(date);
  });

  // Add the x axis to svg
  svg
    .append("g")
    .attr("transform", `translate(0, ${height - padding.bottom})`)
    .call(xAxis);

  // Creates y axis
  const yAxis = d3.axisLeft(yScale).tickFormat((value) => {
    const numericValue = typeof value === "number" ? value : value.valueOf();
    if (numericValue >= 1000) {
      return `${(numericValue / 1000).toFixed(0)}k`;
    }
    return numericValue.toString();
  });

  // Add the y axis to svg
  svg
    .append("g")
    .attr("transform", `translate(${padding.left - 10}, 0)`)
    .call(yAxis)
    .selectAll("text")
    .attr("text-anchor", "end");

  svg.selectAll(".domain, .tick line").remove();

  svg
    .append("text")
    .attr("x", 0)
    .attr("y", padding.top - 20)
    .style("font-size", "20px")
    .attr("font-family", "Inter")
    .attr("fill", theme.palette.primary.contrastText)
    .text(label);
};

const mouseOver = (
  e: MouseEvent,
  d: any,
  rowWidth: number,
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
  xScale: d3.ScaleTime<number, number, never>,
  yScale: d3.ScaleLinear<number, number, never>,
  theme: any
) => {
  d3.select(e.currentTarget as d3.BaseType).attr(
    "fill",
    theme.palette.primary.dark
  );

  svg
    .append("text")
    .attr("class", "bar-value")
    .text(d.value)
    .attr("x", xScale(d.date) + rowWidth / 2)
    .attr("y", yScale(d.value) - 10)
    .attr("text-anchor", "middle")
    .style("fill", theme.palette.primary.contrastText)
    .style("font-size", "12px")
    .transition()
    .duration(500)
    .tween("text", function () {
      const i = d3.interpolate(0, d.value);
      return function (t) {
        d3.select(this).text(Math.round(i(t))); // Use Math.round() to display integer values during the transition
      };
    });
};

const mouseOut = (
  e: MouseEvent,
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
  colorsArray: string[]
) => {
  const currentTarget = e.currentTarget as d3.BaseType;
  const index = d3.select(currentTarget).attr("data-index");

  if (index) {
    d3.select(currentTarget).attr("fill", colorsArray[+index]);
  }

  svg.selectAll(".bar-value").remove();
};
