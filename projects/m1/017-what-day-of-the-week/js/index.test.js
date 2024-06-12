const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/017-what-day-of-the-week/js/index.js');

describe('Test exe-017-what-day-of-the-week', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});