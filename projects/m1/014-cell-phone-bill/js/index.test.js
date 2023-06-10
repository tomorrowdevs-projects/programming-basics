const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/014-cell-phone-bill/js/index.js');

describe('Test exe-014-cell-phone-bill', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});