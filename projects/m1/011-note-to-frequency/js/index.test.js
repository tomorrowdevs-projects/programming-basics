const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/011-note-to-frequency/js/index.js');

describe('Test exe-011-note-to-frequency', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});