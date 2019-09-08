import React, {FunctionComponent, useEffect, useRef} from "react";
import {range} from "d3-array";
import {schemeCategory10} from "d3-scale-chromatic";
import {select} from "d3-selection";

const ScaleComponentDemo12: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const dataSet = range(5);
    const color = schemeCategory10;

    const svg = select(elements.current)
      .append('svg')
      .attr('width', 600)
      .attr('height', 600);

    svg.selectAll('circle')
      .data(dataSet)
      .enter()
      .append('circle')
      .attr('cx', (_, index) => 100 + index * 80)
      .attr('cy', 100)
      .attr('r', 30)
      .attr('fill', (_, index) => color[index]);
  }, []);

  return (
    <>
      <h2>demo12 - 颜色比例尺的使用</h2>
      <div ref={elements}></div>
    </>
  );
};

export default ScaleComponentDemo12;
