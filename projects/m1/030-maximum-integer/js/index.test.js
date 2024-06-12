const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/030-maximum-integer/js/index.js');

describe('Test exe-030-maximum-integer', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});