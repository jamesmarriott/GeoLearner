import React, { useRef, useEffect, useState, useCallback } from "react";
import { select, geoPath, easeCubicOut, geoMercator, geoEquirectangular, min, max, scaleLinear } from "d3";
import useResizeObserver from "./useResizeObserver";

function GeoChart({ data, property, countrySelectorCallback, selectedCountry}) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change

  useEffect(() => {
    const svg = select(svgRef.current);

    const minProp = min(data.features, feature => feature.properties[property]);
    const maxProp = max(data.features, feature => feature.properties[property]);
    
    function randomColor1() {
    const num = Math.floor(Math.random()*16777215).toString(16)
    return `#${num}`
      }

    // console.log(randomColor2)
    
    // const colorScale = scaleLinear()
    //   .domain([minProp, maxProp])
    //   .range([`#${randomColor1}`, `#${randomColor2}`]);

    
    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinates on a 2D plane
    const projection = geoEquirectangular()
      .fitSize([width, height],
      selectedCountry || data)
      .precision(100);

    // takes geojson data and projects the geo-cordinates on a 2d plane
    const pathGenerator = geoPath().projection(projection);

    const zoomSettings = {
      duration: 1000,
      ease: easeCubicOut,
      zoomLevel : 5
    }

    // render each country
    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", (e,feature) => {
         countrySelectorCallback(feature)
        })
      .attr("class", "country")
      .transition()
      .attr("d", feature => pathGenerator(feature))
            .text(
        feature =>
          feature &&
          feature.properties.name
      );
    
  

      svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      .text(
        feature =>
          feature &&
          feature.properties.name
      )
      .style("font", "30px arial")
      .attr("x", width-(width/2))
      .attr("y", height-(height/2));
  }, [data, dimensions, property, selectedCountry]);


  return (
    <div ref={wrapperRef}>
      <svg ref={svgRef}>
      </svg>
    </div>
  );
}

export default GeoChart;
