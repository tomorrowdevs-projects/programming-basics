const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/044-reduce-measures/js/index.js');

describe('Test exe-044-reduce-measures', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});