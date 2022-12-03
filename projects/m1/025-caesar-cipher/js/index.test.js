const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/025-caesar-cipher/js/index.js');

describe('Test exe-025-caesar-cipher', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});