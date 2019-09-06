import loadableComponent from './loadableComponent';
import React from "react";
import {RouteComponentProps} from "react-router";

interface IPages {
  [key: string]: Function;
}

interface IExportPages {
  [key: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

const HomeContainer = () => import('../pages/HomeContainer');
const SelectionAndData = ()=> import('../pages/SelectionAndData/SelectionAndData');
const Scale = () => import('../pages/Scale/Scale');

const pages: IPages = {
  HomeContainer,
  SelectionAndData,
  Scale,
};

// Object.keys(pages).forEach((key: string) => loadableComponent(pages[key]));

const exportPages: IExportPages = {};
Object.keys(pages).forEach((key: string) => {
  exportPages[key] = loadableComponent(pages[key]);
});

export default exportPages;
