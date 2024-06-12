const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/015-is-it-a-leap-year/js/index.js');

describe('Test exe-015-is-it-a-leap-year', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});