const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/040-password-validation/js/index.js');

describe('Test exe-040-password-validation', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});