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
  });

  return (
    <>
      <h2>demo7 - 复杂的弧形生成器示例</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo7;
