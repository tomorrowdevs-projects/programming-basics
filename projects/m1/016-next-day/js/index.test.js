const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/016-next-day/js/index.js');

describe('Test exe-016-next-day', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});