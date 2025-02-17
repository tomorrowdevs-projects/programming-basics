const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/029-decimal-to-binary/js/index.js');

describe('Test exe-029-decimal-to-binary', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});