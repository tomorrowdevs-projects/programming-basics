const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/039-random-password/js/index.js');

describe('Test exe-039-random-password', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});