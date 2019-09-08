import React, {FunctionComponent, useEffect, useRef} from "react";
import {scaleQuantize} from "d3-scale";
import {select} from "d3-selection";
import {descending} from "d3-array";
import {getColorCode} from "../../../consts/color";

const ScaleComponentDemo5: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const quantize = scaleQuantize().domain([0, 50]).range([5, 4, 3, 2, 1]);

    // 定义圆的半径数组
    let r = [45, 35, 25, 15, 5];

    const svg = select(elements.current)
      .append('svg')
      .attr('width', 400)
      .attr('height', 400);

    svg.selectAll('circle')
      .data(r)
      .enter()
      .append('circle')
      .sort(descending)
      .attr('cx', (_, index) => 50 + index * 30)
      .attr('cy', 50)
      .attr('r', data => data)
      .attr('fill', data => getColorCode(quantize(data)));
  }, []);

  return (
    <>
      <h2>demo5 - 量子比例尺的使用实例</h2>
      <div ref={elements}></div>
    </>
  );
};

export default ScaleComponentDemo5;
