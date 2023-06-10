const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/033-shipping-calculator/js/index.js');

describe('Test exe-033-shipping-calculator', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});