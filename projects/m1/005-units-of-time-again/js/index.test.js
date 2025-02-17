const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/005-units-of-time-again/js/index.js');

describe('Test exe-005-units-of-time-again', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});