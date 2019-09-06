import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";

const SelectionAndDataComponentDemo2: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const p = select(elements.current).selectAll('p');
    p.datum('d3js')
        .text((text, index) => `${text}: ${index}`)
        .append('span')
        .text((text)=> ` - span ${text}`);
  });

  return (
      <>
        <h2>demo2 - datum: 添加元素</h2>
        <div ref={elements}>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </>
  );
};

export default SelectionAndDataComponentDemo2;
