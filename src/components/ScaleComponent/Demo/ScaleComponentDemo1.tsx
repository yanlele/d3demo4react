import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";

const ScaleComponentDemo1: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    select(elements.current)
        .selectAll('p')
        .datum('d3js')
        .text((text, index) => `${text}: ${index}`);
  });

  return (
      <>
        <h2>demo1 - 比例尺</h2>
        <div ref={elements}></div>
      </>
  );
};

export default ScaleComponentDemo1;
