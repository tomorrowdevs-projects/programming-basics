const shapeCalculator = require("./shape_calculator");

describe("UnitTest", () => {
  let rectangle, square;

  beforeEach(() => {
    rectangle = new shapeCalculator.Rectangle(3, 6);
    square = new shapeCalculator.Square(5);
  });

  test("Expected Square class to be a subclass of the Rectangle class.", () => {
    const actual = square instanceof shapeCalculator.Rectangle;
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("Expected Square class to be a distinct class from the Rectangle class.", () => {
    const actual = Object.is(shapeCalculator.Rectangle, shapeCalculator.Square);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  test("Expected square object to be an instance of the Square class and the Rectangle class.", () => {
    const actual =
      square instanceof shapeCalculator.Rectangle &&
      square instanceof shapeCalculator.Square;
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("Expected string representation of rectangle to be Rectangle(width=3, height=6)", () => {
    const actual = rectangle.getString();
    const expected = "Rectangle(width=3, height=6)";
    expect(actual).toEqual(expected);
  });

  test("Expected string representation of square to be Square(side=5)", () => {
    const actual = square.getString();
    const expected = "Square(side=5)";
    expect(actual).toEqual(expected);
  });

  test("Expected area of rectangle to be 18", () => {
    const actual = rectangle.getArea();
    const expected = 18;
    expect(actual).toEqual(expected);
  });

  test("Expected area of square to be 25", () => {
    const actual = square.getArea();
    const expected = 25;
    expect(actual).toEqual(expected);
  });

  test("Expected perimeter of rectangle to be 18", () => {
    const actual = rectangle.getPerimeter();
    const expected = 18;
    expect(actual).toEqual(expected);
  });

  test("Expected perimeter of square to be 20", () => {
    const actual = square.getPerimeter();
    const expected = 20;
    expect(actual).toEqual(expected);
  });

  test("Diagonal rectangle and Diagona square", () => {
    const actualRect = rectangle.getDiagonal();
    const expectedRect = 6.708203932499369;
    expect(actualRect).toEqual(expectedRect);

    const actualSq = square.getDiagonal();
    const expectedSq = 7.0710678118654755;
    expect(actualSq).toEqual(expectedSq);
  });

  test("test set new attributes", () => {
    rectangle.setWidth(7);
    rectangle.setHeight(8);
    square.setSide(2);
    let actual = rectangle.getString();
    let expected = "Rectangle(width=7, height=8)";
    expect(actual).toEqual(expected);

    actual = square.getString();
    expected = "Square(side=2)";
    expect(actual).toEqual(expected);

    square.setWidth(4);
    actual = square.getString();
    expected = "Square(side=4)";
    expect(actual).toEqual(expected);
  });

  test("test retangle picture", () => {
    rectangle.setWidth(7);
    rectangle.setHeight(3);
    const actual = rectangle.getPicture();
    const expected = "*******\n*******\n*******\n";
    expect(actual).toEqual(expected);
  });

  test("test square picture", () => {
    square.setSide(2);
    const actual = square.getPicture();
    const expected = "**\n**\n";
    expect(actual).toEqual(expected);
  });

  test("test big picture", () => {
    rectangle.setWidth(51);
    rectangle.setHeight(3);
    const actual = rectangle.getPicture();
    const expected = "Too big for picture.";
    expect(actual).toEqual(expected);
  });

  test("test get amount inside", () => {
    rectangle.setWidth(15);
    rectangle.setHeight(10);
    const actual = rectangle.getAmountInside(square);
    const expected = 6;
    expect(actual).toEqual(expected);
  });

  test("test two rectangle - get amount inside (Expected 1)", () => {
    const rectangle2 = new shapeCalculator.Rectangle(4, 8);
    const actual = rectangle2.getAmountInside(rectangle);
    const expected = 1;
    expect(actual).toEqual(expected);
  });

  test("test two rectangle - get amount inside (Expected 2)", () => {
    const rectangle2 = new shapeCalculator.Rectangle(2, 3);
    const actual = rectangle2.getAmountInside(rectangle);
    const expected = 0;
    expect(actual).toEqual(expected);
  });

  test("test rectangle get width", () => {
    rectangle.setWidth(10);
    const actual = rectangle.getWidth();
    const expected = 10;
    expect(actual).toEqual(expected);
  });

});
