const { totalTheValues }  = require('./utils');

describe ('stotalTheValues', () => {
    it('should sum all the value I enter', () => {
        expect(totalTheValues(5, 1)).toBe(5);
        expect(totalTheValues(2, 2)).toBe(4);
        expect(totalTheValues(10, 3)).toBe(30);
    });
});