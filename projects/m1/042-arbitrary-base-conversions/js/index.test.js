const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/042-arbitrary-base-conversions/js/index.js');

describe('Test exe-042-arbitrary-base-conversions', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});