const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/027-the-collatz-conjecture/js/index.js');

describe('Test exe-027-the-collatz-conjecture', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});