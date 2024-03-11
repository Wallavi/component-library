import { RefObject } from "react";

import { Padding, CircularChartData } from "charts/types";
import * as d3 from "d3";

interface PieDatum {
  value: number;
  label: string;
}

export const renderGraph = (
  data: CircularChartData[],
  width: number,
  height: number,
  padding: Padding = { left: 40, top: 40, right: 40, bottom: 40 },
  svgRef: RefObject<SVGSVGElement>,
  colors: string[],
  type: string
) => {
  const pieData: PieDatum[] = data
    .map((d) => ({
      value: d.value,
      label: d.label,
    }))
    .sort();

  const radius =
    Math.min(
      width - padding.left - padding.right,
      height - padding.top - padding.bottom
    ) / 2;

  // Create SVG container
  const svg = d3.select(svgRef.current);
  svg.selectAll("*").remove();

  // Create a pie chart
  const pie = d3
    .pie<PieDatum>()
    .value((d) => d.value)
    .padAngle(0.04);

  const adjust = type === "pie" ? 0.03 : 0.5;
  const innerRadius = radius * adjust;
  const outerRadius = radius;

  const arc = d3
    .arc<PieDatum>()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .cornerRadius(3);

  // Append a group (g) element to hold the pie chart
  const pieGroup = svg
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  const t = d3.transition().duration(750).ease(d3.easeLinear);
  // Append slices to the pie chart
  pieGroup
    .selectAll("path")
    .attr("class", "pie-slice")
    .data(pie(pieData))
    .enter()
    .append("path")
    .attr("d", (d: any) => arc(d as any) || "")
    .attr("stroke", "transparent")
    .style("fill", (d: any, i) => colors[i])
    .attr("cursor", "pointer")
    .on("mouseover", (e, d) => mouseOver(e, d))
    .on("mouseout", (e) => mouseOut(e));
};

export const getPercent = (value: number, total: number) => {
  let percent = ((value * 100) / total).toFixed(2);
  return percent + "%";
};

const mouseOver = (e: MouseEvent, d: d3.PieArcDatum<PieDatum>) => {
  const currentTarget = d3.select<SVGGElement, PieDatum>(
    e.currentTarget as SVGGElement
  );

  if (currentTarget.node()) {
    currentTarget
      .transition()
      .duration(200)
      .attr("transform", calcTranslate(d, 8));
  }
};

const mouseOut = (e: MouseEvent) => {
  const currentTarget = d3.select<SVGGElement, PieDatum>(
    e.currentTarget as SVGGElement
  );

  if (currentTarget.node()) {
    currentTarget
      .transition()
      .duration(200)
      .attr("transform", "translate(0, 0)");
  }
};

function calcTranslate(d: d3.PieArcDatum<PieDatum>, move = 4) {
  const moveAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
  return `translate(${-move * Math.cos(moveAngle + Math.PI / 2)}, ${
    -move * Math.sin(moveAngle + Math.PI / 2)
  })`;
}
