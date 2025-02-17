const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/032-taxi-fare/js/index.js');

describe('Test exe-032-taxi-fare', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});