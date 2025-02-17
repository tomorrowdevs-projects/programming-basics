const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/045-magic-dates/js/index.js');

describe('Test exe-045-magic-dates', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});