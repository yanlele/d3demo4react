import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";

const SelectionAndDataComponentDemo3: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const nodes = select(elements.current);
    const person: { id: number, name: string }[] = [
      {
        id: 6,
        name: '张三',
      },
      {
        id: 9,
        name: '李四',
      },
      {
        id: 3,
        name: '王五',
      },
    ];
    const update = nodes.selectAll('p').data(person);
    const enter = update.enter();
    enter.append('p')
        .sort((a, b) => {
          return b.id - a.id;
        })
        .text((data) => `${data.id}: ${data.name}`);
  });

  return (
      <>
        <h2>demo3 - 绑定数据顺序问题</h2>
        <div ref={elements}>
        </div>
      </>
  );
};

export default SelectionAndDataComponentDemo3;
