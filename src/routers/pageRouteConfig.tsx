import pages from './pages';
import * as React from "react";
import {RouteComponentProps} from "react-router";

/*interface*/
interface IStaticRoutes {
  path: string,
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
  exact: boolean,
  title: string,
  metas?: any[]
}

const staticRotes: IStaticRoutes[] = [
  {
    path: '/',
    component: pages.HomeContainer,
    exact: true,
    title: '主页',
    metas: [],
  },
  {
    path: '/select-data',
    component: pages.SelectionAndData,
    exact: true,
    title: '数据与选择集',
    metas: [],
  },
];

export default staticRotes;
