import * as d3 from "d3";
import { RefObject } from "react";
import { DataObject } from "../types";

export const renderGraph = (
  data: Object,
  width: number,
  height: number,
  padding: number,
  reference: RefObject<SVGSVGElement>,
  tooltipRef: RefObject<HTMLDivElement>,
  yTickCount: number = 6,
  showLines: boolean = false,
  tension: number = 1,
  colors: string[],
  theme: any
) => {
  const dataArray: DataObject[] = Object.values(data).flat();

  const svg = d3.select(reference.current);
  const tooltip = d3.select(tooltipRef.current);

  svg.selectAll("*").remove();

  const xDomain = d3.extent(dataArray, (d) => new Date(d.date));
  const yDomain = [0, d3.max(dataArray, (d) => d.value + 100)];

  const validXDomain = xDomain as [Date, Date];
  const validYDomain = yDomain as [number, number];

  const xScale = d3
    .scaleTime()
    .domain(validXDomain)
    .range([padding * 2, width - 5]);

  const yScale = d3
    .scaleLinear()
    .domain(validYDomain)
    .range([height - padding, padding]);

  //barGraph(data, svg, xScale, yScale, width, height, padding);

  const xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat((date: any) => {
    const format = d3.timeFormat("%b");
    return format(date);
  });

  svg
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis)
    .selectAll(".tick line, .domain")
    .remove();

  const yAxis = d3.axisLeft(yScale).ticks(yTickCount);

  // add tick lines
  showLines &&
    yAxis
      .tickSize(-width + padding)
      .tickSizeOuter(0)
      .tickPadding(15);

  svg
    .append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(${padding * 2}, 0)`)
    .call(yAxis)
    .selectAll(".domain" + `${!showLines ? ", .tick line" : ""}`)
    .remove();

  lineGraph(data, svg, xScale, yScale, tooltip, tension, colors, theme);
};

const lineGraph = (
  data: Object,
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
  xScale: d3.ScaleTime<number, number, never>,
  yScale: d3.ScaleLinear<number, number, never>,
  tooltip: d3.Selection<HTMLDivElement | null, unknown, null, undefined>,
  tension: number = 1,
  colors: string[],
  theme: any
) => {
  const line = d3
    .line<DataObject>()
    .x((d) => xScale(new Date(d.date)))
    .y((d) => yScale(d.value))
    .curve(d3.curveCardinal.tension(tension));

  Object.entries(data).forEach(([key, value]: any, i: number) => {
    const lines = svg
      .append("path")
      .datum(value)
      .attr("fill", "none")
      .attr("stroke", colors[i])
      .attr("stroke-width", 6)
      .attr("d", line)
      .style("pointer-events", "all");

    const hoverDot = svg
      .append("circle")
      .attr("class", "hover-dot")
      .attr("r", 5) // Adjust the radius of the dot
      .style("fill", theme.palette.primary.contrastText) // Adjust the fill color of the dot
      .style("boder", "2px solid #E9E9EE")
      .style("display", "none");

    lines
      .on("mouseover", () => handleMouseOver(tooltip, hoverDot))
      .on("mouseout", () => handleMouseOut(tooltip, hoverDot))
      .on("mousemove", (e) =>
        handleMouseMove(e, tooltip, xScale, yScale, value, hoverDot)
      );
  });
};

function handleMouseOver(
  tooltip: d3.Selection<HTMLDivElement | null, unknown, null, undefined>,
  hoverDot: d3.Selection<SVGCircleElement, unknown, null, undefined>
) {
  tooltip.style("display", "block");
  hoverDot.style("display", "block");
}

function handleMouseOut(
  tooltip: d3.Selection<HTMLDivElement | null, unknown, null, undefined>,
  hoverDot: d3.Selection<SVGCircleElement, unknown, null, undefined>
) {
  tooltip.style("display", "none");
  hoverDot.style("display", "none");
}

function handleMouseMove(
  event: MouseEvent,
  tooltip: d3.Selection<HTMLDivElement | null, unknown, null, undefined>,
  xScale: d3.ScaleTime<number, number, never>,
  yScale: d3.ScaleLinear<number, number, never>,
  value: DataObject[],
  hoverDot: d3.Selection<SVGCircleElement, unknown, null, undefined>
) {
  const mouseX = d3.pointer(event)[0];
  const xValue = xScale.invert(mouseX);
  const bisect = d3.bisector((d: DataObject) => d.date).left;
  const index = bisect(value, xValue, 1);
  const leftData = value[index - 1] || 0;
  const rightData = value[index] || 0;
  const closestData =
    +xValue - +leftData.date > +rightData.date - +xValue ? rightData : leftData;

  tooltip
    .html(`${closestData.value}`)
    .style("font-family", "inter")
    .style("font-size", "24px")
    .style("position", "absolute")
    .style("left", event.pageX + 10 + "px")
    .style("top", event.pageY - 20 + "px")
    .transition()
    .duration(600)
    .tween("text", function () {
      const interpolate = d3.interpolate(0, closestData.value);
      const textNode: HTMLDivElement | null = this;
      return function (t) {
        if (textNode) textNode.textContent = Math.round(interpolate(t)) + ""; // Update text during the transition
      };
    });

  hoverDot
    .attr("cx", xScale(new Date(closestData.date) || 0))
    .attr("cy", yScale(closestData.value))
    .style("display", "block");
}
