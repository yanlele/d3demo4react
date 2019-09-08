import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";
import {scaleLinear} from "d3-scale";
import {axisBottom, axisLeft, axisRight} from "d3-axis";
import {format} from "d3-format";

const ScaleComponentDemo14: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const svg = select(elements.current)
      .append('svg')
      .attr('width', 600)
      .attr('height', 600);

    // 用于坐标轴的线性比例尺
    const xScale = scaleLinear().domain([0, 10]).range([0, 300]);

    // 坐标轴
    const leftAxis = axisLeft(xScale).ticks(5, '.1f');
    const leftAxis2 = axisBottom(xScale).ticks(5).tickSizeInner(1).tickSizeOuter(5);
    const rightAxis = axisRight(xScale).ticks([5], '.1f');
    const rightAxis2 = axisRight(xScale).tickValues([3, 4, 5, 6, 7]).tickFormat(format("$.1f"));

    // 在svg中添加一个包含坐标各个元素的g元素
    const lAxis = svg.append('g')
      .attr('transform', `translate(80, 80)`);

    const rAxis = svg.append('g')
      .attr('transform', `translate(100, 80)`);

    const rAxis2 = svg.append('g')
      .attr('transform', `translate(140, 80)`);

    const lAxis2 = svg.append('g')
      .attr('transform', `translate(180, 80)`);

    lAxis.call(leftAxis);
    lAxis2.call(leftAxis2);
    rAxis.call(rightAxis);
    rAxis2.call(rightAxis2);
  }, []);

  return (
    <>
      <h2>demo14 - 坐标轴刻度问题</h2>
      <div ref={elements}></div>
    </>
  );
};

export default ScaleComponentDemo14;
