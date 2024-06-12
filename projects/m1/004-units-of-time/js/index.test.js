const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/004-units-of-time/js/index.js');

describe('Test exe-004-units-of-time', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});