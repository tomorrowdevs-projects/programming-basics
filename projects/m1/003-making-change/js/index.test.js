const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/003-making-change/js/index.js');

describe('Test exe-003-making-change', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});