import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";
import {schemeCategory10} from "d3-scale-chromatic";
import {ribbon} from "d3-chord";

const DrawComponentDemo9: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    // 创建一个简单的弦生成器
    const ribbonIndex = ribbon()
      .source(() => ({
        startAngle: 0.2,
        endAngle: Math.PI * 0.3,
        radius: 100,
      }))
      .target(() => ({
        startAngle: Math.PI,
        endAngle: Math.PI * 1.6,
        radius: 100,
      }))
      .radius(100);

    svg.append('path')
      // @ts-ignore
      .attr('d', ribbonIndex)
      .attr('transform', 'translate(200, 200)')
      .attr('stroke', schemeCategory10[8])
      .attr('stroke-width', '2px')
      .attr('fill', schemeCategory10[9]);
  });

  return (
    <>
      <h2>demo9 - 弦生成器： ribbon 使用方法2</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo9;
