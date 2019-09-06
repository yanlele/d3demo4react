const path = require('path');
const fse = require('fs-extra');

const componentsPath = path.resolve(__dirname, '../src/components');

// class1
const selectionAndDataBasePath = path.resolve(componentsPath, 'SelectionAndDataComponent/Demo');
const selectionAndDataDemoPaths = fse.readdirSync(selectionAndDataBasePath);

// class2
const scaleComponentBasePath = path.resolve(componentsPath, 'ScaleComponent/Demo');
const scaleComponentDemoFilePaths = fse.readdirSync(scaleComponentBasePath);

function mockFunction(basePath, demoPaths) {
  return demoPaths.reduce((paths, current) => {
    const match = current.match(/Demo[0-9]*/);
    if (match) {
      const currentPath = path.resolve(basePath, match.input);
      const key = match[0].toLowerCase();

      Object.assign(paths, {
        [`GET /api/class1-${key}`]: {code: fse.readFileSync(currentPath, 'utf-8')}
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

