const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/038-capitalize-it/js/index.js');

describe('Test exe-038-capitalize-it', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});