const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/012-what-color-is-that-square/js/index.js');

describe('Test exe-012-what-color-is-that-square', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});