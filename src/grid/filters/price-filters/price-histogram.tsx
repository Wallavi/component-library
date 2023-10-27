// @ts-nocheck
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import { grey } from "@mui/material/colors";

interface HistogramProps {
  data: number[];
  width: number;
  height: number;
  maxPrice: number;
  minPrice: number;
  numberOfSlices: number;
}

const Histogram: React.FC<HistogramProps> = ({
  data,
  width,
  height,
  maxPrice,
  minPrice,
  numberOfSlices,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const histogram = d3
      .bin()
      .value((d) => d)
      .domain([numberOfSlices, maxPrice]) // Adjust the domain based on your data
      .thresholds(d3.range(0, maxPrice + 1, numberOfSlices)); // Adjust the range as needed

    const bins = histogram(data);

    const margin = { top: 0, right: 0, bottom: 0, left: 0 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3
      .scaleLinear()
      .domain([minPrice, maxPrice])
      .range([0, innerWidth]);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(bins, (d) => d.length)])
      .range([innerHeight, 0]);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear any previous rendering

    const g = svg.append("g").attr("fill", grey[800]);
    //   .attr("transform", `translate(${margin.left},${margin.top})`);

    g.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.x0))
      .attr("y", (d) => y(d.length))
      .attr("width", (d) => {
        const secondD = x(d.x0) > 0 ? x(d.x0) : 0;
        return x(d.x1) - secondD - 1;
      })
      .attr("height", (d) => y(0) - y(d.length));

    g.append("g");
    //   .attr("transform", `translate(0,${innerHeight})`)

    // g.append("g").call(d3.axisLeft(y));
  }, [data, width, height, maxPrice, minPrice, numberOfSlices]);

  return <svg ref={svgRef} width={width} height={height} />;
};

export default Histogram;
