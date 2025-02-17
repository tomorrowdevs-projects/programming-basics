const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/019-average/js/index.js');

describe('Test exe-019-average', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});