import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";
import {scaleLinear, scaleLog, scalePow} from "d3-scale";
import {axisBottom} from "d3-axis";

const ScaleComponentDemo15: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const svg = select(elements.current)
      .append('svg')
      .attr('width', 600)
      .attr('height', 600);

    // 用于坐标轴的线性比例尺
    const linear = scaleLinear().domain([0, 100]).range([0, 500]);
    const pow = scalePow().exponent(2).domain([0, 10]).range([0, 500]);
    const log = scaleLog().domain([0.01, 10]).range([0, 500]);

    // 坐标轴
    const linearBottomAxis = axisBottom(linear).ticks(10);
    const powBottomAxis = axisBottom(pow);
    const logBottomAxis = axisBottom(log);

    // 在svg中添加一个包含坐标各个元素的g元素
    const linearBottom = svg.append('g')
      .attr('transform', `translate(80, 80)`);         // 平移到（80，80）

    const powBottom = svg.append('g')
      .attr('transform', `translate(80, 120)`);         // 平移到（80，80）

    const logBottom = svg.append('g')
      .attr('transform', `translate(80, 160)`);         // 平移到（80，80）

    linearBottom.call(linearBottomAxis);
    powBottom.call(powBottomAxis);
    logBottom.call(logBottomAxis);
  });

  return (
    <>
      <h2>demo15 - 其他各种比例尺的坐标轴</h2>
      <div ref={elements}></div>
    </>
  );
};

export default ScaleComponentDemo15;
