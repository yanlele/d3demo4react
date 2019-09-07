import React, {FunctionComponent, useEffect, useRef} from "react";
import {arc, DefaultArcObject} from "d3-shape";
import {select} from "d3-selection";
import {schemeCategory10} from "d3-scale-chromatic";

const DrawComponentDemo5: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    // 弧形参数
    const dataSet: DefaultArcObject = {
      startAngle: 0,
      endAngle: Math.PI * .5,
      innerRadius: 50,
      outerRadius: 100,
    };

    const arcPath = arc();

    svg.append('path')
      .attr('d', () => arcPath(dataSet))
      .attr('transform', 'translate(250, 250)')
      .attr('stroke', schemeCategory10[0])
      .attr('stroke-width', '3px')
      .attr('fill', schemeCategory10[1]);
  });

  return (
    <>
      <h2>demo5 - 弧形成器</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo5;
