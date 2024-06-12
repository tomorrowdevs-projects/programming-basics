const { isEmptyFile } = require('../../../__test__/utils');
const runTest = isEmptyFile('./projects/m1/001-area-of-a-room/js/index.js');

describe('Test exe-001-area-of-a-room', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});