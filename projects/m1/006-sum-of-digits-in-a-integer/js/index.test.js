const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/006-sum-of-digits-in-a-integer/js/index.js');

describe('Test exe-006-sum-of-digits-in-a-integer', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});