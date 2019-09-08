import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";

const SelectionAndDataComponentDemo6: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const nodes = select(elements.current);
    const dataset: { id: number, name: string, age?: number }[] = [{
      id: 1001,
      name: '张三',
    },
      {
        id: 1002,
        name: '李四',
      }];

    const p = nodes.selectAll('p');
    const update = p.data(dataset);
    const enter = update.enter();

    enter.append('p')
        .each((data, index) => data.age = index * 12)
        .text(data =>`${data.id} : ${data.name} - ${data.age}`);
  }, []);

  return (
      <>
        <h2>demo6 - each</h2>
        <div ref={elements}>
        </div>
      </>
  );
};

export default SelectionAndDataComponentDemo6;
