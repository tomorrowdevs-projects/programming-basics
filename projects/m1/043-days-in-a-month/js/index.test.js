const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/043-days-in-a-month/js/index.js');

describe('Test exe-043-days-in-a-month', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});