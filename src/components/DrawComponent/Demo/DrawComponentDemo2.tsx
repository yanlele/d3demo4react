import React, {FunctionComponent, useEffect, useRef} from "react";
import {line} from "d3-shape";
import {select} from "d3-selection";

const DrawComponentDemo2: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    const lines: [number, number][] = [[80, 80], [200, 100], [200, 200], [100, 200], [80, 80]];

    // 创建一个线段生成器
    const linePath = line().x((data) => data[0]);

    // 添加段落
    svg.append('path')
      .attr('d', () => linePath(lines))
      .attr('stroke', 'black')
      .attr('stroke-width', '3px')
      .attr('fill', 'none');
  });

  return (
    <>
      <h2>demo1 - 最简单的线段生成器</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo2;
