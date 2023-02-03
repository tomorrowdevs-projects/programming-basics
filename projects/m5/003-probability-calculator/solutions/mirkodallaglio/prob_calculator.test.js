const prob_calculator = require ('./prob_calculator');
const index = require ('./index');


describe('function objToArr', () => {
    const obj = {'red': 3, 'yellow':2, 'blue': 0};

    it('check result', () => {
        expect(prob_calculator.objToArr(obj)).toEqual(['red', 'red', 'red', 'yellow', 'yellow']);
    })
})

describe('function checkExtraction', () => {
    const contents = ['red', 'red', 'red', 'yellow', 'yellow'];
    const excepted = ['red', 'red', 'red', 'yellow', 'yellow'];
    const excepted2 = ['red', 'red'];
    const excepted3 = ['grey','red', 'red'];
    const excepted4 = ['red','red', 'red', 'red', 'yellow', 'yellow'];

    it('if the elements of contents and excepted are equal', () => {
        expect(prob_calculator.checkExtraction(contents, excepted)).toBeTruthy();
    })

    it('if the excepted is a subset of the contents', () => {
        expect(prob_calculator.checkExtraction(contents, excepted2)).toBeTruthy();
    })

    it('if the excepted is NOT a subset of the contents', () => {
        expect(prob_calculator.checkExtraction(contents, excepted3)).toBeFalsy();
    })

    it('if the excepted have more elements of contents', () => {
        expect(prob_calculator.checkExtraction(contents, excepted4)).toBeFalsy();
    })
})

describe('function experiment', () => {
    const hat1 = new index.Hat('yellow=3, blue=2, green=6');

    it('with num_ball_drawn equal to hat.contents.length', () => {
        expect(prob_calculator.experient(hat1, {'green':3, 'blue':1}, 11, 1000)).toBe('100.0');
    })

    it('with num_ball_drawn less than the elements in expected_balls', () => {
        expect(prob_calculator.experient(hat1, {'green':3, 'blue':1}, 2, 1000)).toBe('0.0');
    })

    it('expected_balls with elements not included in hat.contents', () => {
        expect(prob_calculator.experient(hat1, {'grey':3, 'blue':1}, 11, 1000)).toBe('0.0');
    })

    it('real result', () => {
        expect(Number(prob_calculator.experient(hat1, {'yellow':2, 'blue':1}, 8, 4500))).toBeGreaterThan(78);
        expect(Number(prob_calculator.experient(hat1, {'yellow':2, 'blue':1}, 8, 4500))).toBeLessThan(82);
    })
})