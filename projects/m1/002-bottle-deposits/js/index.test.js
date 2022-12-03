const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/002-bottle-deposits/js/index.js');

describe('Test exe-002-bottle-deposits', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});