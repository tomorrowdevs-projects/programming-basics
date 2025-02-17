const check = require('../view/check')

describe('Check', () => {

    it('check', () => {
        expect(check.check([2,3], 2)).toBe(2);
        expect(check.check([2,3], 4)).toBeFalsy();
    });

    it('inputAndCheck', () => {
        check.prompt = jest.fn().mockReturnValue(3).mockReturnValueOnce(4);
        expect(check.inputAndCheck([3], '')).toBe(3);
        expect(check.inputAndCheck([3], '')).toBe(3);
    })

    it('arrayNumber', () => {
        expect(check.arrayNumber(1,10)).toEqual(['1','2','3','4','5','6','7','8','9','10']);
        expect(check.arrayNumber(5,8)).toEqual(['5','6','7','8']);
    })
})