const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/013-birth-date-to-astrological-sign/js/index.js');

describe('Test exe-013-birth-date-to-astrological-sign', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});