const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/026-is-a-string-a-palindrome/js/index.js');

describe('Test exe-026-is-a-string-a-palindrome', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});