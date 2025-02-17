const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/024-fizz-buzz/js/index.js');

describe('Test exe-024-fizz-buzz', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});