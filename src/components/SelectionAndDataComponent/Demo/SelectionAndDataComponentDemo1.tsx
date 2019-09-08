import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";

const SelectionAndDataComponentDemo1: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    select(elements.current)
        .selectAll('p')
        .datum('d3js')
        .text((text, index) => `${text}: ${index}`);
  }, []);

  return (
      <>
        <h2>demo1 - 最简单的 datum 数据绑定</h2>
        <div ref={elements}>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </>
  );
};

export default SelectionAndDataComponentDemo1;
