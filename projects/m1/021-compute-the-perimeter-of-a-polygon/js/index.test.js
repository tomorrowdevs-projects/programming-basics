const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/021-compute-the-perimeter-of-a-polygon/js/index.js');

describe('Test exe-021-compute-the-perimeter-of-a-polygon', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});