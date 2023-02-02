
const {Hat, experiment}  = require('./utils');

describe('UnitTests', () => {
    
    test('test of correct content list from hat creation', () => {
        const hat = new Hat('red=3','blue=2')
        const actual = hat.contentList
        const expected = ['red','red','red','blue','blue']
        expect(actual).toEqual(expected);
      });
    
      test('test draw in order to check the number of draw and two random color', () => {
        const hat = new Hat('red=5','blue=2')
        const actual = hat.draw(2)
        const expected = ['blue', 'red']
        expect(actual).toEqual(expected);
        const actualLength = hat.contentList.length
        console.log(actualLength)
        const expectedLength = 5
        expect(actualLength).toEqual(expectedLength)
      });

      test('test experiment prob function', () => {
        let hat = new Hat('blue=3','red=2','green=6')
        let probability = experiment(hat,{"blue":2,"green":1},4,1000)
        let actual = probability
        let expected = 0.272
        expect(actual).toBeCloseTo(expected, 0.01); // The 2 stands for the number of decimal points, it means it will compare till 2 decimal places

        hat = new Hat('yellow=5','red=1','green=3','blue=9','test=1')
        probability = experiment(hat,{"yellow":2,"blue":3,"test":1},20,100)
        expected = 0
        expect(actual).toBeCloseTo(expected, 0.01)

      })
})