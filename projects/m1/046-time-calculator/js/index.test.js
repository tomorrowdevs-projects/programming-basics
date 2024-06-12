const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/046-time-calculator/js/index.js');

describe('Test exe-046-time-calculator', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});