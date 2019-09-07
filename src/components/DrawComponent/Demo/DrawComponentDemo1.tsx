import React, {FunctionComponent, useRef} from "react";
import {rgb} from "d3-color";
import {interpolate} from "d3-interpolate";

const DrawComponentDemo1: FunctionComponent = () => {
  const elements = useRef(null);
  const compute = (num: number) => {
    const a = rgb('red');
    const b = rgb('green');
    return interpolate(a, b)(num);
  };

  return (
    <>
      <h2>demo1 - </h2>
      <p>console.log(compute(0)); --> {compute(0)}</p>
      <p>console.log(compute(.2)); --> {compute(.2)}</p>
      <p>console.log(compute(.5)); --> {compute(.5)}</p>
      <p>console.log(compute(1)); --> {compute(1)}</p>

      <div ref={elements}></div>
    </>
  );
};

export default DrawComponentDemo1;
