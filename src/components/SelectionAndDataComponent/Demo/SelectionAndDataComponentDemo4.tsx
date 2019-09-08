import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";

const SelectionAndDataComponentDemo4: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const nodes = select(elements.current);
    const dataset: number[] = [10, 20, 30];

    const p = nodes.selectAll('p');
    const update = p.data(dataset);
    const enter = update.enter();
    const exit = update.exit();

    update.text(text => text);

    enter.append('p')
        .text(text => text);

    exit.remove();
  }, []);

  return (
      <>
        <h2>demo4 - update/enter/exit相关概念</h2>
        <div ref={elements}>
          <p></p>
          <p></p>
        </div>
      </>
  );
};

export default SelectionAndDataComponentDemo4;
