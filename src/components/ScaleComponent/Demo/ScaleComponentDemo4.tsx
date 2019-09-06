import React, {FunctionComponent, useEffect, useRef} from "react";
import {scaleQuantize} from "d3-scale";

const ScaleComponentDemo4: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const quantize = scaleQuantize().domain([0, 10]).range([1, 2, 3, 4, 5]);
    console.log(quantize(1));
    console.log(quantize(3));
    console.log(quantize(5.99));
    console.log(quantize(6));
  });

  return (
    <>
      <h2>demo4 - 量子比例尺</h2>
      <div ref={elements}></div>
    </>
  );
};

export default ScaleComponentDemo4;
