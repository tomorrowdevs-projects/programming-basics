const { calculateAreaRoom } = require('./index.js');

describe('CalculateAreaRoom', () => {
    it('Test', () => {
        expect(calculateAreaRoom(100, 100)).toBe(10000);

    });
});