const polygonCalculator = require(`./index.js`);
const Rectangle = polygonCalculator.Rectangle;
const Square = polygonCalculator.Square;

describe(`UnitTests`, () => {
    beforeEach(() => {
        rect = new Rectangle(3, 6);
        sq = new Square(5);
    })

    test(`test_subclass`, () => {
        expect(sq.constructor.prototype).toEqual(rect.constructor.prototype);
        expect(Object.getPrototypeOf(Square)).toBe(Rectangle);
    })

    test(`test_distinct_classes`, () => {
        expect(Square).not.toEqual(Rectangle);
    })

    test(`test_square_is_square_and_rectangle`, () => {
        expect(sq).toBeInstanceOf(Square);
        expect(Object.getPrototypeOf(sq)).toEqual(new Rectangle);
    })

    test(`test_rectangle_string`, () => {
        actual = rect.print();
        expected = `Rectangle(width=3, height=6)`;
        expect(actual).toBe(expected);
    })

    test(`test_square_string`, () => {
        actual = sq.print();
        expected = "Square(side=5)";
        expect(actual).toBe(expected);
    })

    test(`test_area`, () => {
        actual = rect.get_area();
        expected = 18;
        expect(actual).toBe(expected);
        actual = sq.get_area();
        expected = 25;
        expect(actual).toBe(expected);
    })

    test(`test_perimeter`, () => {
        actual = rect.get_perimeter();
        expected = 18;
        expect(actual).toBe(expected);
        actual = sq.get_perimeter();
        expected = 20;
        expect(actual).toBe(expected);
    })

    test(`test_diagonal`, () => {
        actual = rect.get_diagonal();
        expected = 6.708203932499369;
        expect(actual).toBeCloseTo(expected);
        actual = sq.get_diagonal();
        expected = 7.0710678118654755;
        expect(actual).toBeCloseTo(expected);
    })

    test(`test_set_attributes`, () => {
        rect.set_width(7);
        rect.set_height(8);
        sq.set_side(2);
        actual = rect.print();
        expected = "Rectangle(width=7, height=8)";
        expect(actual).toBe(expected);
        actual = sq.print();
        expected = "Square(side=2)";
        expect(actual).toBe(expected);
        sq.set_width(4)
        actual = sq.print()
        expected = "Square(side=4)";
        expect(actual).toBe(expected);
    })

    test(`test_rectangle_picture`, () => {
        rect.set_width(7);
        rect.set_height(3);
        actual = rect.get_picture();
        expected = "*******\n*******\n*******\n";
        expect(actual).toBe(expected);
        expect(typeof actual).toBe(`string`);
    })

    test(`test_square_picture`, () => {
        sq.set_side(2);
        actual = sq.get_picture();
        expected = "**\n**\n";
        expect(actual).toBe(expected);
        expect(typeof actual).toBe(`string`);
    })

    test(`test_big_picture`, () => {
        rect.set_width(51);
        rect.set_height(3);
        actual = rect.get_picture();
        expected = "Too big for picture.";
        expect(actual).toBe(expected);
    })

    test(`test_get_amount_inside`, () => {
        rect.set_height(10);
        rect.set_width(15);
        actual = rect.get_amount_inside(sq);
        expected = 6;
        expect(actual).toBe(expected);
    })

    test(`test_get_amount_inside_two_rectangles`, () => {
        rect2 = new Rectangle(4, 8);
        actual = rect2.get_amount_inside(rect);
        expected = 1;
        expect(actual).toBe(expected);
    })

    test(`test_get_amount_inside_none`, () => {
        rect2 = new Rectangle(2, 3)
        actual = rect2.get_amount_inside(rect);
        expected = 0;
        expect(actual).toBe(expected);
    })
})
