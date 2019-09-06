const path = require('path');
const fse = require('fs-extra');

const componentsPath = path.resolve(__dirname, '../src/components');
const selectionAndDataComponentDemoPath = path.resolve(componentsPath, 'SelectionAndDataComponent/Demo');

const demoPath = fse.readdirSync(selectionAndDataComponentDemoPath);

// 处理方式1
const selectionAndDataComponentMock = demoPath.reduce((paths, current)=> {
    const match =current.match(/Demo[0-9]*/);
  if (match) {
    const currentPath = path.resolve(selectionAndDataComponentDemoPath, match.input);
    const key = match[0].toLowerCase();

    Object.assign(paths, {
      [`GET /api/class1-${key}`]: {code: fse.readFileSync(currentPath, 'utf-8')}
    });
    return paths;
  }
}, {});

// 处理方式2
// demoPath.map((item)=> {
//   const match =item.match(/Demo[0-9]*/);
//   if (match) {
//     const currentPath = path.resolve(selectionAndDataComponentDemoPath, match.input);
//     const key = match[0].toLowerCase();
//
//     Object.assign(selectionAndDataComponentMock, {
//       [`GET /api/class1-${key}`]: {code: fse.readFileSync(currentPath, 'utf-8')}
//     });
//   }
// });

module.exports = selectionAndDataComponentMock;



