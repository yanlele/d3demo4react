import React, {FunctionComponent, useEffect, useRef} from "react";
import {scalePow} from "d3-scale";

const ScaleComponentDemo3: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const pow = scalePow().exponent(3);
    console.log(pow(2));            // 8
    console.log(pow(3));            // 27

    pow.exponent(0.5);
    console.log(pow(2));            // 1.4142135623730951
    console.log(pow(3));            // 1.7320508075688772

    // 指数标尺下的定义域和值域
    /*
    * 计算结果为11.25 结果分析如下
    * 指数标尺使得定义域相对的可以说是扩展为了[0, 3*3*3] = [0, 27]
    * 相对于pow(1.5) 就是 3.375
    * 相当于 对应的线性比例尺的结果
    * let linear = scaleLinear().domain([0, 27]).range([0, 90]);
    * console.log(linear(3.375));     // 11.25
    * */
    pow.exponent(3)
        .domain([0, 3])
        .range([0, 90]);
    console.log(pow(1.5));           // 11.25
  }, []);

  return (
      <>
        <h2>demo3 - 指数标尺和对数标尺: scalePow() | scaleLog()</h2>
        <div ref={elements}></div>
      </>
  );
};

export default ScaleComponentDemo3;
