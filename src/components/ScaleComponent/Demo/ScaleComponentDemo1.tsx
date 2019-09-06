import React, {FunctionComponent, useEffect, useRef} from "react";
import {scaleLinear} from "d3-scale";

const ScaleComponentDemo1: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const linear = scaleLinear().domain([0, 500]).range([0, 100]);
    console.log(linear(50));            // 结果10
    console.log(linear(250));           // 结果50
    console.log(linear(450));           // 结果90
  });

  return (
      <>
        <h2>demo1 - 比例尺</h2>
        <div ref={elements}></div>
      </>
  );
};

export default ScaleComponentDemo1;
