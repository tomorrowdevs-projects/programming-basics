const { Rectangle, Square } = require("./index.js");

describe("Rectangle and Square", () => {
  let rect, sq;

  beforeEach(() => {
    rect = new Rectangle(3, 6);
    sq = new Square(5);
  });

  describe("Instances and Subclasses", () => {
    test("Expected rectangle object to be an instance of the Rectangle class.", () => {
      const actual = rect instanceof Rectangle;
      const expected = true;
      expect(actual).toEqual(expected);
    });

    test("Expected square object to be an instance of the Square class.", () => {
      const actual = sq instanceof Square;
      const expected = true;
      expect(actual).toEqual(expected);
    });

    test("Expected Square class to be a subclass of the Rectangle class.", () => {
      const actual = sq instanceof Rectangle;
      const expected = true;
      expect(actual).toEqual(expected);
    });

    test("Expected Square class to be a distinct class from the Rectangle class.", () => {
      const expected = false;
      expect(Rectangle === Square).toEqual(expected);
    });

    test("Expected square object to be an instance of the Square class and the Rectangle class.", () => {
      const actual = sq instanceof Rectangle && sq instanceof Square;
      const expected = true;
      expect(actual).toEqual(expected);
    });
  });

  describe(".printString()", () => {
    test(`Expected string representation of rectangle to be "Rectangle(width=3, height=6)".`, () => {
      const actual = rect.printString();
      const expected = "Rectangle(width=3, height=6)";
      expect(actual).toEqual(expected);
    });

    test(`Expected string representation of square to be "Square(side=5)".`, () => {
      const actual = sq.printString();
      const expected = "Square(side=5)";
      expect(actual).toEqual(expected);
    });
  });

  describe(".getArea()", () => {
    test("Expected area of rectangle to be 18.", () => {
      const actual = rect.getArea();
      const expected = 18;
      expect(actual).toEqual(expected);
    });

    test("Expected area of square to be 25.", () => {
      const actual = sq.getArea();
      const expected = 25;
      expect(actual).toEqual(expected);
    });
  });

  describe(".getPerimeter()", () => {
    test("Expected perimeter of rectangle to be 18.", () => {
      const actual = rect.getPerimeter();
      const expected = 18;
      expect(actual).toEqual(expected);
    });

    test("Expected perimeter of square to be 20.", () => {
      const actual = sq.getPerimeter();
      const expected = 20;
      expect(actual).toEqual(expected);
    });
  });

  describe(".getDiagonal()", () => {
    test("Expected diagonal of rectangle to be 6.708203932499369.", () => {
      const actual = rect.getDiagonal();
      const expected = 6.708203932499369;
      expect(actual).toEqual(expected);
    });

    test("Expected diagonal of square to be 7.0710678118654755.", () => {
      const actual = sq.getDiagonal();
      const expected = 7.0710678118654755;
      expect(actual).toEqual(expected);
    });
  });

  describe("Set attributes", () => {
    test(`Expected string representation of rectangle after setting new values to be "Rectangle(width=7, height=8)".`, () => {
      rect.setWidth(7);
      rect.setHeight(8);
      const actual = rect.printString();
      const expected = "Rectangle(width=7, height=8)";
      expect(actual).toEqual(expected);
    });

    test(`Expected string representation of square after setting new values to be "Square(side=2)".`, () => {
      sq.setSide(2);
      const actual = sq.printString();
      const expected = "Square(side=2)";
      expect(actual).toEqual(expected);
    });
  });

  describe(".getPicture()", () => {
    test("Expected rectangle picture to be different.", () => {
      rect.setWidth(7);
      rect.setHeight(3);
      const actual = rect.getPicture();
      const expected = "*******\n*******\n*******\n";
      expect(actual).toEqual(expected);
    });

    test("Expected square picture to be different.", () => {
      sq.setSide(2);
      const actual = sq.getPicture();
      const expected = "**\n**\n";
      expect(actual).toEqual(expected);
    });

    test(`Expected message: "Too big for picture.".`, () => {
      rect.setWidth(51);
      rect.setHeight(3);
      const actual = rect.getPicture();
      const expected = "Too big for picture.";
      expect(actual).toEqual(expected);
    });
  });

  describe(".getAmountInside()", () => {
    test("Expected `getAmountInside` to return 6.", () => {
      rect.setHeight(10);
      rect.setWidth(15);
      const actual = rect.getAmountInside(sq);
      const expected = 6;
      expect(actual).toEqual(expected);
    });

    test("Expected `getAmountInside` to return 1.", () => {
      const rect2 = new Rectangle(4, 8);
      const actual = rect2.getAmountInside(rect);
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    test("Expected `getAmountInside` to return 0.", () => {
      const rect2 = new Rectangle(2, 3);
      const actual = rect2.getAmountInside(rect);
      const expected = 0;
      expect(actual).toEqual(expected);
    });
  });
});
