//test file
//const { default: test } = require('node:test')
const {Rectangle, Square} = require('./utils')

describe('UnitTests', () => {

    let rectangle
    let square

    beforeEach(() => {
        rectangle = new Rectangle(3,6)
        square = new Square(5)
    })

    test('test negative numbers as input', () => {
        expect(() => {
            new Rectangle(-3,6)
        }).toThrowError(Error, 'the input number cannot be negative')
    })
    
    test('check if Square is a subclass/instance of Rectangle', () => {
        const actual = square instanceof Rectangle
        const expected = true
        expect(actual).toBe(expected)
    })

    test('check that square is an istance of Square', () =>{
        const actual = square instanceof Square
        const expected = true
        expect(actual).toBe(expected)
    })

    test('test rectangle string',() => {
        const actual = rectangle.toString()
        const expected = 'Rectangle(width=3, height=6)'
        expect(actual).toBe(expected)
    })

    test('test square string',() => {
        const actual = square.toString()
        const expected = 'Square(side=5)'
        expect(actual).toBe(expected)
    })

    test('area rectangle', () => {
        const actual = rectangle.getArea()
        const expected = 18
        expect(actual).toBe(expected)
    })

    test('area square', () => {
        const actual = square.getArea()
        const expected = 25
        expect(actual).toBe(expected)
    })

    test('perimeter rectangle', () => {
        const actual = rectangle.getPerimeter()
        const expected = 18
        expect(actual).toBe(expected)
    })

    test('perimeter square', () => {
        const actual = square.getPerimeter()
        const expected = 20
        expect(actual).toBe(expected)
    })

    test('diagonal rectangle and square', () => {
        const actualRect = rectangle.getDiagonal()
        const actualSq = square.getDiagonal()
        const expectedRect = 6.708203932499369
        const expectedSq = 7.0710678118654755
        expect(actualRect).toBe(expectedRect)
        expect(actualSq).toBe(expectedSq)
    })

    test('tring representation of rectangle after setting new values to be "Rectangle(width=7, height=8)' ,() =>{
        rectangle.setWidth(7)
        rectangle.setHeight(8)
        square.setSide(2)
        let actual = rectangle.toString()
        let expected = 'Rectangle(width=7, height=8)'
        expect(actual).toBe(expected)
        actual = square.toString()
        expected = 'Square(side=2)'
        expect(actual).toBe(expected)
        square.setWidth(4)
        actual = square.toString()
        expected = 'Square(side=4)'
    })

    test('rectangle picture', () => {
        rectangle.setWidth(7)
        rectangle.setHeight(3)
        const actual = rectangle.getPicture()
        const expected = `*******\n*******\n*******\n` 
        expect(actual).toBe(expected)
    })

    test('square picture', () => {
        square.setSide(2)
        const actual = square.getPicture()
        const expected = `**\n**\n`
        expect(actual).toBe(expected)
    })

    test('big picture', () => {
        rectangle.setHeight(51)
        rectangle.setWidth(5)
        const actual = rectangle.getPicture()
        const expected = 'Too big for picture.'
        expect(actual).toBe(expected)
    })

    test('get amount inside', () => {
        rectangle.setHeight(10)
        rectangle.setWidth(15)
        const actual = rectangle.getAmountInside(square)
        const expected = 6
        expect(actual).toBe(expected)
    })

    test('get two rectangle - amount inside 1', () => {
        let rectangle2 = new Rectangle(4,8)
        const actual = rectangle2.getAmountInside(rectangle)
        const expected = 1
        expect(actual).toBe(expected)
    })

    test('get two rectangle - amount inside 0', () => {
        let rectangle2 = new Rectangle(2,3)
        const actual = rectangle2.getAmountInside(rectangle)
        const expected = 0
        expect(actual).toBe(expected)
    })
})