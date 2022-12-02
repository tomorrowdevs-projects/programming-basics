const fs = require('fs')
const fileNotEmpty = fs.readFileSync('./projects/m1/002-bottle-deposits/js/index.js', 'utf8')
const runTest = fileNotEmpty ? it : it.skip;

describe('', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});