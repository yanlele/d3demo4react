const indexMock = require('./mock/index');
const selectionAndDataComponentMock = require('./mock/selectionAndDataComponentMock');
const scaleComponentMock = require('./mock/scaleComponentMock');
const drawComponentMock = require('./mock/drawComponentMock');

module.exports = {
  ...indexMock,
  ...selectionAndDataComponentMock,
  ...scaleComponentMock,
  ...drawComponentMock
};
