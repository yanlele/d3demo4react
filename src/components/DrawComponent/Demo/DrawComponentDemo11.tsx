import React, {FunctionComponent, useEffect, useRef} from "react";
import {arc} from "d3-shape";
import {select} from "d3-selection";
import {formatPrefix} from "d3-format";
import {chord, ChordGroup, ribbon} from "d3-chord";
import {descending, range} from "d3-array";
import {rgb} from "d3-color";

enum GetColor {
  "#000000",
  "#FFDD89",
  "#957244",
  "#F26223",
}

const DrawComponentDemo11: FunctionComponent = () => {
  const element = useRef(null);

  useEffect(() => {
    const svg = select(element.current)
      .append('svg')
      .attr('height', 600)
      .attr('width', 600);

    // 数据的矩阵
    const matrix: number[][] = [
      [11975, 5871, 8916, 2868],
      [1951, 10048, 2060, 6171],
      [8010, 16145, 8090, 8045],
      [1013, 990, 940, 6907],
    ];
    const width = 600;                         // 获取svg元素的宽度
    const height = 600;                        //  获取svg元素的高度

    // 计算外半径尺寸，这里取svg画布的宽、高的最小值的一半，减去40，表示两边留有余地；
    const outerRadius = Math.min(width, height) * 0.5 - 40;
    // 计算内半径尺寸
    const innerRadius = outerRadius - 30;

    // 定义数值的格式化函数
    const formatValue: (n: number | { valueOf(): number }) => string = formatPrefix(',.0', 1e3);

    // 定义一个chord diagram的布局函数chord()由于通过chord()函数将matrix转换后，matrix实际分成了
    // 两个部分，groups 和 chords ,其中groups
    // 表示弦图上的弧，称为外弦，groups中的各个元素都被计算用添加上了angle、startAngle、endAngle、index、value
    // 等字段；chords 称为内弦，表示弦图中节点的连线及其权重。chords 里面分为 source 和 target ，分别标识连线的两端。
    const chordMain = chord()
    // 设置弦片段之间的间隔角度，即chord diagram 图中组成外层圆圈的各个弧段之间的角度
      .padAngle(0.05)
      // 设置数据矩阵matrix 的行内各列的排序顺序为降序排列
      .sortSubgroups(descending);

    // 定义一个弧线的布局函数arc()
    const arcMain = arc()
    // 设置弧线的内半径
      .innerRadius(innerRadius)
      // 设置弧线的外半径
      .outerRadius(outerRadius);

    // 定义一个弦布局函数ribbon()
    const ribbonMain = ribbon()
    // 设置弦的半径为弧线的内半径
      .radius(innerRadius);

    // 定义一个组元素
    const g = svg.append('g')
    // 将组元素移动到画布的中心处
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
      // chord(matrix)函数用来将matrix数组转换为chord diagram 所需的数据格式，
      // 通过datum将转换后用于显示弦图的数据绑定到 g元素上；
      .datum(chordMain(matrix));

    // 定义一组g元素，用来绑定弦图的 groups数据，即弧线
    const group = g.append('g')
      .attr('class', 'groups')
      .selectAll('g')
      .data(chords => chords.groups)
      .enter()
      .append('g');

    // group元素是用来放置弦图的“弧”的
    group.append('path')
      .style('fill', data => GetColor[data.index])
      .style('stroke', function (d: ChordGroup) {
        console.log(rgb(GetColor[d.index]).darker().toString());
        return rgb(GetColor[d.index]).darker().toString();
      })
      // @ts-ignore
      .attr("d", arcMain);

    // 定义每一段弧上的刻度元素
    const groupTick = group.selectAll('.group-tick')
    //为每段弧的刻度元素绑定数据，数据为当前弧上的刻度的角度数组
      .data((d: ChordGroup) => {
        return groupTicks(d, 1e3);
      })
      .enter()
      .append('g')
      .attr('class', 'group-tick')
      .attr('transform', data => "rotate(" + (data.angle * 180 / Math.PI - 90) + ") translate(" + outerRadius + ",0)");

    // 绘制弦图外围的刻度线
    groupTick.append("line")
      .attr('stroke', '#000')
      .attr("x2", 6);

    // 定义刻度线上的文字
    groupTick
    // 不能被5整除的数字不显示
      .filter(function(d) { return d.value % 5e3 === 0; })
      .append("text")
      .attr("x", 8)
      .attr("dy", ".35em")
      .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180) translate(-16)" : null; })
      .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
      .text(function(d) { return formatValue(d.value); });

    // 给之前定义的g这个元素添加样式并绑定数据用来画弦图的弦。
    g.append("g")
      .style('fill-opacity', '0.67')
      .selectAll("path")
      .data(function(chords) { return chords; })
      .enter().append("path")
      // @ts-ignore
      .attr("d", ribbonMain)
      // 弦的填充色是目标点的索引值确定的
      .style("fill", (data: any) => GetColor[data.target.index])
      .style("stroke", (d: any) => rgb(GetColor[d.target.index]).darker());
  });

  const groupTicks = (d: ChordGroup, step: number) => {
    // k表示单位弧度
    let k: number = (d.endAngle - d.startAngle) / d.value;
    return range(0, d.value, step).map(value => ({value: value, angle: value * k + d.startAngle}));
  };

  return (
    <>
      <h2>demo11 - chordDemo</h2>
      <div ref={element}></div>
    </>
  );
};

export default DrawComponentDemo11;
