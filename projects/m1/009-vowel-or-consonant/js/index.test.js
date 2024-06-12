const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/009-vowel-or-consonant/js/index.js');

describe('Test exe-009-vowel-or-consonant', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});