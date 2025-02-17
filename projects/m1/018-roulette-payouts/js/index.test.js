const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/018-roulette-payouts/js/index.js');

describe('Test exe-018-roulette-payouts', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});