import React, {FunctionComponent, useEffect, useRef} from "react";
import {select} from "d3-selection";

const SelectionAndDataComponentDemo7: FunctionComponent = () => {
  const elements = useRef(null);

  useEffect(() => {
    const nodes = select(elements.current);

    // 创建矩形高度
    const dataset: number[] = [50, 43, 120, 87, 99, 167, 142];

    // 创建svg画布宽高
    const width = 400;
    const height = 400;

    // 定义上下边距
    const padding = {
      top: 20,
      bottom: 20,
      right: 20,
      left: 20,
    };

    // 矩形所占据的宽度， 包括空白， 单位像素
    const rectStep = 35;

    // 矩形所占据的宽度， 不包括空白， 单位像素
    const reactWidth = 30;

    const svg = nodes.append('svg');
    svg.attr('width', width)
        .attr('height', height);

    // 通过 dataset 给svg 添加矩形和文字
    const rect = svg.selectAll('react');
    rect.data(dataset)
        .enter()
        .append('rect')
        .sort((a, b) => a - b)
        .attr('fill', 'steelblue')
        .attr('x', (_, index) => padding.left + index * rectStep)
        .attr('y', data => height - data - padding.bottom)
        .attr('width', reactWidth)
        .attr('height', data => data);

    // 添加文字
    svg.selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .sort((a, b) => a - b)
        .attr('fill', 'white')
        .attr('font-size', '14px')
        .attr('text-anchor', 'middle')
        .attr('x', (_, index) => padding.left + index * rectStep)
        .attr('y', data => height - data - padding.bottom)
        .attr('dx', reactWidth / 2)
        .attr('dy', '1em')
        .text(data => data);

  }, []);

  return (
      <>
        <h2>demo7 - 绘制一个简单的柱状图</h2>
        <div ref={elements}>
        </div>
      </>
  );
};

export default SelectionAndDataComponentDemo7;
