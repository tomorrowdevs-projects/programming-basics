const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/031-coin-flip-simulation/js/index.js');

describe('Test exe-031-coin-flip-simulation', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});