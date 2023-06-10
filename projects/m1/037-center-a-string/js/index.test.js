const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/037-center-a-string/js/index.js');

describe('Test exe-037-center-a-string', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});