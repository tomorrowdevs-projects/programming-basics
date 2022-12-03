const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/007-day-old-bread/js/index.js');

describe('Test exe-007-day-old-bread', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});