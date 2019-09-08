import React, {FunctionComponent, useEffect, useRef} from "react";
import {curveStep, line} from "d3-shape";
import {select} from "d3-selection";

const DrawComponentDemo3: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    // 点
    const lines: [number, number][] = [[80, 80], [120, 120], [160, 160], [200, 200], [240, 240], [280, 280]];

    // 创建一个线段生成器
    const linePath = line()
      .x(data => data[0])
      .y((_, index) => index % 2 === 0 ? 40 : 120)
      // .curve(curveBasis)
      // .curve(curveCardinal)
      .curve(curveStep)       // 形变
      .defined(data => data[0] < 260);    // 限制

    // 添加段落
    svg.append('path')
      .attr('d', () => linePath(lines))
      .attr('stroke', 'black')
      .attr('stroke-width', '3px')
      .attr('fill', 'none');
  }, []);

  return (
    <>
      <h2>demo3 - 稍微复杂一点的线段生成器</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo3;
