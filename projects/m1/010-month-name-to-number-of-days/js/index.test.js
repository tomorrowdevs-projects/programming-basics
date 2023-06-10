const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/010-month-name-to-number-of-days/js/index.js');

describe('Test exe-010-month-name-to-number-of-days', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});