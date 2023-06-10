const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/020-discount-table/js/index.js');

describe('Test exe-020-discount-table', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});