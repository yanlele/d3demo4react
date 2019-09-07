import React, {FunctionComponent, useEffect, useRef} from "react";
import {area} from "d3-shape";
import {select} from "d3-selection";
import {schemeCategory10} from "d3-scale-chromatic";

const DrawComponentDemo4: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    // 点
    const dataSet: [number, number][] = [[80, 80], [120, 120], [130, 130], [70, 70], [60, 60], [90, 90]];

    const areaPath = area()
      .x((_, index) => 50 + index * 60)
      .y0(() => 600 / 2)
      .y1(data => 600 / 2 - data[1]);

    svg.append('path')
      .attr('d', () => areaPath(dataSet))
      .attr('stroke', 'block')
      .attr('stroke-width', '3px')
      .attr('fill', schemeCategory10[6]);
  });

  return (
    <>
      <h2>demo4 - 区域生成器 area</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo4;
