import React, {FunctionComponent, useEffect, useRef} from "react";
import {arc, DefaultArcObject} from "d3-shape";
import {select} from "d3-selection";
import {schemeCategory10} from "d3-scale-chromatic";

const DrawComponentDemo6: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    // 弧形参数
    const arcPath = arc();

    const dataset: DefaultArcObject[] = [{
      startAngle: 0,
      endAngle: Math.PI * .75,
      innerRadius: 50,
      outerRadius: 100,
    }];

    svg.selectAll('path')
      .data(dataset)
      .enter()
      .append('path')
      .attr('d', data => arcPath(data))
      .attr('transform', 'translate(250, 250)')
      .attr('stroke', schemeCategory10[0])
      .attr('stroke-width', '3px')
      .attr('fill', schemeCategory10[1]);
  });

  return (
    <>
      <h2>demo6 - 弧形生成器的第二种用法</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo6;
