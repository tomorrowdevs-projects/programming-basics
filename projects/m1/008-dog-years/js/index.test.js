const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/008-dog-years/js/index.js');

describe('Test exe-008-dog-years', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});