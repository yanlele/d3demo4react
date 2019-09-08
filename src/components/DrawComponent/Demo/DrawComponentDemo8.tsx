import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";
import {schemeCategory10} from "d3-scale-chromatic";
import {ribbon, Ribbon} from "d3-chord";

const DrawComponentDemo8: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    const dataSet: Ribbon = {
      source: {
        startAngle: 0.2,
        endAngle: Math.PI * 0.3,
        radius: 100,
      },
      target: {
        startAngle: Math.PI,
        endAngle: Math.PI * 1.6,
        radius: 100,
      },
    };

    // 创建一个简单的弦生成器
    const ribbonIndex = ribbon();

    svg.append('path')
      // @ts-ignore
      .attr('d', ribbonIndex(dataSet))
      .attr('transform', 'translate(200, 200)')
      .attr('fill', schemeCategory10[1])
      .attr('stroke', schemeCategory10[0])
      .attr('stroke-width', '2px');
  }, []);

  return (
    <>
      <h2>demo8 - 弦生成器: ribbon 使用方法1</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo8;
