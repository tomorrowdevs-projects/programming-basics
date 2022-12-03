const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/023-parity-bits/js/index.js');

describe('Test exe-023-parity-bits', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});