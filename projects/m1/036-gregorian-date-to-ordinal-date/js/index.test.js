const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/036-gregorian-date-to-ordinal-date/js/index.js');

describe('Test exe-036-gregorian-date-to-ordinal-date', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});