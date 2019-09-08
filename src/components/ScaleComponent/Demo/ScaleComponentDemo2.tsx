import React, {FunctionComponent, useEffect, useRef} from "react";
import {scaleLinear} from "d3-scale";

const ScaleComponentDemo2: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const linear = scaleLinear().domain([0, 20]).range([0, 100]);
    console.log(linear(10));    // 获取定义域为10 的值域 结果为 50
    console.log(linear(30));    // 结果150
    console.log(linear.invert(80));        // 结果 16

    // 如果不希望超出范围
    linear.clamp(true);
    console.log(linear(30));    // 100

    // 如果希望获取值域的时候四舍五入, 用下面的方法代替range()　方法
    linear.rangeRound([0, 100]);
    console.log(linear(13.33)); // 67

    // 理想化定义域
    linear.domain([0.12300000, 0.4888888]).nice();
    console.log(linear.domain());     // [0.1, 0.5]

    // 对于ticks() 和 tickFormat() 的使用
    const linear2 = scaleLinear().domain([-20, 20]).range([0, 100]);
    const ticks: number[] = linear2.ticks(5);
    console.log('ticks: ', ticks);    //  [-20, -10, 0, 10, 20]

    const tickFormat = linear2.tickFormat(5, '+');

    const ticksFormatResult = ticks.map( (item) => tickFormat(item));
    console.log(ticksFormatResult);   // ["-2e+1", "-1e+1", "+0", "+1e+1", "+2e+1"]
  }, []);

  return (
      <>
        <h2>demo2 - 线性比例尺的用法</h2>
        <div ref={elements}></div>
      </>
  );
};

export default ScaleComponentDemo2;
