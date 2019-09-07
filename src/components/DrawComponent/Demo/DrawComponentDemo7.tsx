import React, {FunctionComponent, useEffect, useRef} from "react";
import {arc, DefaultArcObject} from "d3-shape";
import {select} from "d3-selection";
import {schemeCategory10} from "d3-scale-chromatic";

const DrawComponentDemo7: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    const dataSet: DefaultArcObject[] = [
      {
        startAngle: 0,
        endAngle: Math.PI * .6,
        innerRadius: 0,
        outerRadius: 100,
      },
      {
        startAngle: Math.PI * .6,
        endAngle: Math.PI,
        innerRadius: 0,
        outerRadius: 100,
      },
      {
        startAngle: Math.PI,
        endAngle: Math.PI * 1.7,
        innerRadius: 0,
        outerRadius: 100,
      },
      {
        startAngle: Math.PI * 1.7,
        endAngle: Math.PI * 2,
        innerRadius: 0,
        outerRadius: 100,
      },
    ];

    const arcPath = arc();

    // 绘制图形
    svg.selectAll('path')
      .data(dataSet)
      .enter()
      .append('path')
      .attr('d', data => arcPath(data))
      .attr('transform', 'translate(250, 250)')
      .attr('stroke', 'black')
      .attr('stroke-width', '2px')
      .attr('fill', (_, index) => schemeCategory10[index]);

    // 添加文字
    svg.selectAll('text')
      .data(dataSet)
      .enter()
      .append('text')
      .attr('transform', (data) => `translate(250, 250) translate(${arcPath.centroid(data)})`)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '18px')
      .text(data => Math.floor((data.endAngle - data.startAngle) * 180 / Math.PI) + '°');
  });

  return (
    <>
      <h2>demo7 - 复杂的弧形生成器示例</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo7;
