import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";
import {scaleLinear} from "d3-scale";
import {axisBottom} from "d3-axis";

const ScaleComponentDemo13: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    // 用于坐标轴的线性比例尺
    const xScale = scaleLinear().domain([0, 10]).range([0, 300]);

    // 坐标轴
    const axis = axisBottom(xScale);

    const svg = select(elements.current)
      .append('svg')
      .attr('width', 600)
      .attr('height', 600);

    const gAxis = svg.append('g')
      .attr('transform', 'translate(80, 80)');

    gAxis.call(axis);
  });

  return (
    <>
      <h2>demo13 - 坐标轴的基本使用</h2>
      <div ref={elements}></div>
    </>
  );
};

export default ScaleComponentDemo13;
