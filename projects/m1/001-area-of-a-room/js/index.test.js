const fs = require('fs')

const fileNotEmpty = fs.readFileSync('./projects/m1/001-area-of-a-room/js/index.js', 'utf8')

const runTest = fileNotEmpty ? it : it.skip;

const { calculateAreaRoom } = require('./index.js');

describe('CalculateAreaRoom', () => {
    runTest('Test', () => {
        expect(calculateAreaRoom(100, 100)).toBe(10000);
    });
});