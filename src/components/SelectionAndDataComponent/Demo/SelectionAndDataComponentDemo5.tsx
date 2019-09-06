import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";

const SelectionAndDataComponentDemo5: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const nodes = select(elements.current);
    const dataset: number[] = [10, 20, 30];

    const p = nodes.selectAll('p');
    const update = p.data(dataset);
    const enter = update.enter();

    enter.append('p')
        .filter(text => text > 10)
        .text(text => text);
  });

  return (
      <>
        <h2>demo5 - filter</h2>
        <div ref={elements}>
        </div>
      </>
  );
};

export default SelectionAndDataComponentDemo5;
