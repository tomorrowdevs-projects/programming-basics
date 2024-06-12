const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/041-hexadecimal-and-decimal-digits/js/index.js');

describe('Test exe-041-hexadecimal-and-decimal-digits', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});