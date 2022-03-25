const shapeCalculator = require("./shape-calculator");

const rect = new shapeCalculator.Rectangle(3, 6);
const sq = new shapeCalculator.Square(5);

// test subclass
test('Expected Square class to be a subclass of the Rectangle class.', () => {
    expect(sq instanceof shapeCalculator.Rectangle).toBe(true);
})

/*
    * Object.is() determines two values are the same value:
    * Two objects are the same if both reference the same object in memory
*/

// test distinct classes
test('Expected Square class to be a distinct class from the Rectangle class.', () => {
    expect(!Object.is(shapeCalculator.Rectangle, shapeCalculator.Square)).toBe(true);
    // expect(shapeCalculator.Rectangle !== shapeCalculator.Square).toBe(true);
})

// test square is an istance of Square and Rectangle classes
test('Expected square object to be an instance of the Square class and the Rectangle class.', () => {
    expect(sq instanceof shapeCalculator.Rectangle && sq instanceof shapeCalculator.Square).toBe(true);
})

// test string representations
test('Expected string representation of rectangle to be "Rectangle(width=3, height=6)"', () => {
    expect(rect.string()).toStrictEqual("Rectangle(width=3, height=6)");
})

test('Expected string representation of square to be "Square(side=5)"', () => {
    expect(sq.string()).toStrictEqual("Square(side=5)");
})

// test area
test('Expected area of rectangle to be 18', () => {
    expect(rect.getArea()).toBe(18);
})

test('Expected area of square to be 25', () => {
    expect(sq.getArea()).toBe(25);
})

// test perimeter
test('Expected perimeter of rectangle to be 18', () => {
    expect(rect.getPerimeter()).toBe(18);
})   

test('Expected perimeter of square to be 20', () => {
    expect(sq.getPerimeter()).toBe(20);
}) 
        
// test diagonal
test('Expected diagonal of rectangle to be 6.708203932499369', () => {
    expect(rect.getDiagonal()).toBe(6.708203932499369);
}) 

test('Expected diagonal of square to be 7.0710678118654755', () => {
    expect(sq.getDiagonal()).toBe(7.0710678118654755);
})

// test set attribute
test('Expected string representation of rectangle after setting new values to be "Rectangle(width=7, height=8)"', () => {
    rect.width = 7;
    rect.height = 8;
    expect(rect.string()).toBe("Rectangle(width=7, height=8)");
})

test('Expected string representation of square after setting new values to be "Square(side=2)"', () => {
    sq.side = 2;
    expect(sq.string()).toBe("Square(side=2)");
})

test('Expected string representation of square after setting width to be "Square(side=4)"', () => {
    sq.width = 4;
    expect(sq.string()).toBe("Square(side=4)");
})

// test rectangle picture 
test('Expected rectangle picture to be different.', () => {
    rect.width = 7;
    rect.height = 3;
    expect(rect.getPicture()).toBe("*******\n*******\n*******\n");
})

// test square picture   
test('Expected square picture to be different.', () => {
    sq.side = 2;
    expect(sq.getPicture()).toBe("**\n**\n");
})

// test big picture
test('Expected message: "Too big for picture."', () => {
    rect.width = 51;
    rect.height = 3;
    expect(rect.getPicture()).toBe("Too big for picture.");
})

// test getAmountInside() method
test('Expected `getAmountInside` to return 6.', () => {
    rect.height = 10;
    rect.width = 15;
    sq.side = 5;
    expect(rect.getAmountInside(sq)).toBe(6);
})

test('Expected `getAmountInside` to return 1.', () => {
    const rect2 = new shapeCalculator.Rectangle(4, 8);
    rect.width = 3;
    rect.height = 6;
    expect(rect2.getAmountInside(rect)).toBe(1);
})

test('Expected `getAmountInside` to return 0.', () => {
    const rect2 = new shapeCalculator.Rectangle(2, 3);
    expect(rect2.getAmountInside(rect)).toBe(0);
})