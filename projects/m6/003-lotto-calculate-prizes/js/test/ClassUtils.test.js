const utils = require('../controller/ClassUtils')

describe('ClassUtils', () => {

    it('checkInputArray', () => {
        try {utils.checkInputArray('ciao')}
        catch(e) { expect(e.message).toBe(`Input ciao isn't an array or it is empty, Bill instance not created`)};
        
        try {utils.checkInputArray(9)}
        catch(e) { expect(e.message).toBe(`Input 9 isn't an array or it is empty, Bill instance not created`)};

        try {utils.checkInputArray([])}
        catch(e) { expect(e.message).toBe(`Input  isn't an array or it is empty, Bill instance not created`)};

        try {utils.checkInputArray({ciao: 'ciao'})}
        catch(e) { expect(e.message).toBe(`Input [object Object] isn't an array or it is empty, Bill instance not created`)};

        expect(utils.checkInputArray([12,15])).toBeTruthy();
    });

    it('compareArray', () => {
        expect(utils.compareArray([2,3,4],[2,3,4])).toBeTruthy();
        expect(utils.compareArray([2,'miao',['ciao']],[2,'miao', ['ciao']])).toBeTruthy();
        expect(utils.compareArray([2,3,4],[3,4])).toBeFalsy();
        expect(utils.compareArray(['ciao', 'miao'],['piao', 'miao'])).toBeFalsy();
    });

    it('genNumber', () => {
        const number = utils.genNumber(5);
        const numberSet = [...new Set(number)];

        expect(number).toHaveLength(5);
        expect(numberSet).toHaveLength(5);

        number.forEach(el => {
            expect(typeof el).toBe('number');
            expect(el > 0 && el < 91).toBeTruthy();
        })
    })
})