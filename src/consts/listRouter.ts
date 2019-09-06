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
    ],
  },
];
