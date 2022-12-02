const fs = require('fs')
const fileNotEmpty = fs.readFileSync('./projects/m1/001-area-of-a-room/js/index.js', 'utf8')
const runTest = fileNotEmpty ? it : it.skip;

describe('', () => {
    runTest('Test', () => {
        expect(true).toBe(true);
    });
});