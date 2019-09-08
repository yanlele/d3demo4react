import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";
import {max} from "d3-array";
import {scaleLinear} from "d3-scale";
import {line} from "d3-shape";
import {schemeCategory10} from "d3-scale-chromatic";
import {axisBottom, axisLeft} from "d3-axis";
import {format} from "d3-format";

type DataSet = { country: string, gdp: [number, number][] };

const DrawComponentDemo10: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    // 基础数据
    // 二维数组内部， 第一个参数是年份， 第二个参数是GDP
    const dataSet: DataSet[] = [
      {
        country: "china",
        gdp: [[2000, 11920], [2001, 13170], [2002, 14550],
          [2003, 16500], [2004, 19440], [2005, 22870],
          [2006, 27930], [2007, 35040], [2008, 45470],
          [2009, 51050], [2010, 59490], [2011, 73140],
          [2012, 83860], [2013, 103550]],
      },
      {
        country: "japan",
        gdp: [[2000, 47310], [2001, 41590], [2002, 39800],
          [2003, 43020], [2004, 46550], [2005, 45710],
          [2006, 43560], [2007, 43560], [2008, 48490],
          [2009, 50350], [2010, 54950], [2011, 59050],
          [2012, 59370], [2013, 48980]],
      },
    ];

    // 外边框
    const padding = {top: 50, right: 50, bottom: 50, left: 50};

    // 计算GDP的最大值
    const gdpMax = Math.max(...dataSet.map(data => max(data.gdp, (item => item[1])) || 0));

    // 定义比例尺
    const xScale = scaleLinear()
      .domain([2000, 2014])
      .range([0, 600 - padding.left - padding.right]);

    // 定义y轴比例尺
    const yScale = scaleLinear()
      .domain([0, gdpMax * 1.1])
      .range([600 - padding.top - padding.bottom, 0]);

    // 线性路径生成器
    const linePath = line()
      .x(data => xScale(data[0]))
      .y(data => yScale(data[1]));

    // 添加路径绘制
    svg.selectAll('path')
      .data(dataSet)
      .enter()
      .append('path')
      .attr('transform', `translate(${padding.left}, ${padding.top})`)
      .attr('d', data => linePath(data.gdp))
      .attr('fill', 'none')
      .attr('stroke-width', '3px')
      .attr('stroke', (_, index) => schemeCategory10[index]);

    // x 轴生成器
    const xAxis = axisBottom(xScale)
      .ticks(5)
      .tickFormat(format('d'));

    // y轴生成器
    const yAxis = axisLeft(yScale);

    // 绘制轴线
    svg.append('g')
      .attr('transform', `translate(${padding.left}, ${600 - padding.bottom})`)
      .call(xAxis);
    svg.append('g')
      .attr('transform', `translate(${padding.left}, ${padding.top})`)
      .call(yAxis);
  }, []);

  return (
    <>
      <h2>demo10 - 绘制折现线图</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo10;
