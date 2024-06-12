const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/028-prime-factors/js/index.js');

describe('Test exe-028-prime-factors', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});