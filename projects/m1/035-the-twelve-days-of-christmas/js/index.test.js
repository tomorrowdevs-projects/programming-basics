const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/035-the-twelve-days-of-christmas/js/index.js');

describe('Test exe-035-the-twelve-days-of-christmas', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});