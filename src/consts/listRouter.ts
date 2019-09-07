interface ListRouter {
  title: string,
  pathname: string,
  routerItems: { name: string, search: string }[],
}

export const listRouter: ListRouter[] = [
  {
    title: '第一节：数据与选择集',
    pathname: '/select-data/',
    routerItems: [
      {
        name: 'demo1 - 最简单的 datum 数据绑定',
        search: 'name=demo1',
      },
      {
        name: 'demo2 - datum: 添加元素',
        search: 'name=demo2',
      },
      {
        name: 'demo3 - 绑定顺序问题',
        search: 'name=demo3',
      },
      {
        name: 'demo4 - update/enter/exit相关概念',
        search: 'name=demo4',
      },
      {
        name: 'demo5 - filter',
        search: 'name=demo5',
      },
      {
        name: 'demo6 - each',
        search: 'name=demo6',
      },
      {
        name: 'demo7 - 绘制一个简单的柱状图',
        search: 'name=demo7',
      },
    ],
  },
  {
    title: '第二节：比例尺与坐标轴',
    pathname: '/scale/',
    routerItems: [
      {
        name: 'demo1 - 比例尺',
        search: 'name=demo1',
      },
      {
        name: 'demo2 - 线性比例尺的用法',
        search: 'name=demo2',
      },
      {
        name: 'demo3 - 指数标尺和对数标尺: scalePow() | scaleLog()',
        search: 'name=demo3',
      },
      {
        name: 'demo4 - 量子比例尺',
        search: 'name=demo4',
      },
      {
        name: 'demo5 - 量子比例尺的使用实践',
        search: 'name=demo5',
      },
      {
        name: 'demo6 - 分位比例尺',
        search: 'name=demo6',
      },
      {
        name: 'demo7 - 阈值比例尺 scaleThreshold',
        search: 'name=demo7',
      },
      {
        name: 'demo8 - 序数比例尺 scaleOrdinal 的一个简单的使用',
        search: 'name=demo8',
      },
      {
        name: 'demo9 - 对于scalePoint() 的理解',
        search: 'name=demo9',
      },
      {
        name: 'demo10 - 对于scaleBand() 的理解',
        search: 'name=demo10',
      },
      {
        name: 'demo11 - 颜色比例尺',
        search: 'name=demo11',
      },
      {
        name: 'demo12 - 颜色比例尺的使用',
        search: 'name=demo12',
      },
      {
        name: 'demo13 - 坐标轴的基本使用',
        search: 'name=demo13',
      },
      {
        name: 'demo14 - 坐标轴刻度问题',
        search: 'name=demo14',
      },
      {
        name: 'demo15 - 其他各种比例尺的坐标轴',
        search: 'name=demo15',
      },
      {
        name: 'demo16 - 散点图',
        search: 'name=demo16',
      },
    ],
  },
  {
    title: '第三节：绘制',
    pathname: '/draw/',
    routerItems: [
      {
        name: 'demo1 - 差值',
        search: 'name=demo1',
      },
      {
        name: 'demo2 - 最简单的线段生成器',
        search: 'name=demo2',
      },
      {
        name: 'demo3 - 稍微复杂一点的线段生成器',
        search: 'name=demo3',
      },
      {
        name: 'demo4 - 区域生成器 area',
        search: 'name=demo4',
      },
      {
        name: 'demo5 - 弧形成器',
        search: 'name=demo5',
      },
      {
        name: 'demo6 - 弧形生成器的第二种用法',
        search: 'name=demo6',
      },
      {
        name: 'demo7 - 复杂的弧形生成器示例',
        search: 'name=demo7',
      },
      {
        name: 'demo8 - 弦生成器： ribbon 使用方法1',
        search: 'name=demo8',
      },
      {
        name: 'demo9 - 弦生成器： ribbon 使用方法2',
        search: 'name=demo9',
      },
      {
        name: 'demo10 - 绘制折现线图',
        search: 'name=demo10',
      },
      {
        name: 'demo11 - chordDemo',
        search: 'name=demo11',
      },
    ],
  },
];
