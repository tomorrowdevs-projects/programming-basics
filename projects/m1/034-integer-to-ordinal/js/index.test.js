const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/034-integer-to-ordinal/js/index.js');

describe('Test exe-034-integer-to-ordinal', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});