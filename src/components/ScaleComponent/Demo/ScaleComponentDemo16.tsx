import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";
import {max, range} from "d3-array";
import {scaleLinear} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";

// 生成随机数
const randomFrom = (lowerValue: number, upperValue: number) =>
  Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);

const ScaleComponentDemo16: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const svg = select(elements.current)
      .append('svg')
      .attr('width', 600)
      .attr('height', 600);

    // 圆心数据
    const center = range(20).map(
      () => [randomFrom(1, 9) / 10, randomFrom(1, 9) / 10],
    );

    console.log(`<${'='.repeat(100)}>`);
    console.log(center);
    console.log(`<${'='.repeat(100)}>`);

    // x轴

    const xScale = scaleLinear()
    // @ts-ignore
      .domain([0, 1.2 * max(center, data => data[0])])
      .range([0, 500]);

    // y轴

    const yScale = scaleLinear()
    // @ts-ignore
      .domain([0, 1.2 * max(center, data => data[1])])
      .range([0, 500]);

    // 外边框
    let padding = {
      top: 30,
      right: 30,
      left: 30,
      bottom: 30,
    };

    // 绘制圆
    svg.selectAll('circle')
      .data(center)
      .enter()
      .append('circle')
      .attr('fill', 'black')
      .attr('cx', data => padding.left + xScale(data[0]))
      .attr('cy', data => 600 - padding.bottom - yScale(data[1]))
      .attr('r', 5);

    // 绘制坐标轴
    let bottomAxis = axisBottom(xScale);
    yScale.range([500, 0]);             // 逆转Y轴刻度
    let leftAxis = axisLeft(yScale);

    let linearBottom = svg.append('g')
      .attr('transform', `translate(${padding.left}, ${600 - padding.bottom})`);         // 平移到（80，80）
    let linearLeft = svg.append('g')
      .attr('transform', `translate(${padding.left}, ${600 - padding.bottom - 500})`);
    linearBottom.call(bottomAxis);
    linearLeft.call(leftAxis);
  });

  return (
    <>
      <h2>demo16 - 散点图</h2>
      <div ref={elements}></div>
    </>
  );
};

export default ScaleComponentDemo16;
