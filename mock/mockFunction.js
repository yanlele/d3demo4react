const path = require('path');
const fse = require('fs-extra');

const componentsPath = path.resolve(__dirname, '../src/components');

// class1
const selectionAndDataBasePath = path.resolve(componentsPath, 'SelectionAndDataComponent/Demo');
const selectionAndDataDemoPaths = fse.readdirSync(selectionAndDataBasePath);

// class2
const scaleComponentBasePath = path.resolve(componentsPath, 'ScaleComponent/Demo');
const scaleComponentDemoFilePaths = fse.readdirSync(scaleComponentBasePath);

// class3
const drawComponentBasePath = path.resolve(componentsPath, 'DrawComponent/Demo');
const drawComponentDemoFilePaths = fse.readdirSync(drawComponentBasePath);

function mockFunction(basePath, demoPaths, demoClass) {
  return demoPaths.reduce((paths, current) => {
    const match = current.match(/Demo[0-9]*/);
    if (match) {
      const currentPath = path.resolve(basePath, match.input);
      const key = match[0].toLowerCase();

      Object.assign(paths, {
        [`GET /api/${demoClass}-${key}/`]: {code: fse.readFileSync(currentPath, 'utf-8')}
      });
      return paths;
    }
  }, {});
}

module.exports.mockFunction = mockFunction;

module.exports.scaleComponentBasePath = scaleComponentBasePath;
module.exports.scaleComponentDemoFilePaths = scaleComponentDemoFilePaths;

module.exports.selectionAndDataBasePath = selectionAndDataBasePath;
module.exports.selectionAndDataDemoPaths = selectionAndDataDemoPaths;

module.exports.drawComponentBasePath = drawComponentBasePath;
module.exports.drawComponentDemoFilePaths = drawComponentDemoFilePaths;

