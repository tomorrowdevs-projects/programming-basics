const shapeCalculator = require("./shape-calculator");


// Usage example
const rect = new shapeCalculator.Rectangle(10, 5);
console.log(rect.getArea());
rect.height = 3;
console.log(rect.getPerimeter());
console.log(rect.string());
console.log(rect.getPicture());

// ------------------------------ //

const sq = new shapeCalculator.Square(9);
console.log(sq.getArea());
sq.side = 4;
console.log(sq.getDiagonal());
console.log(sq.string());
console.log(sq.getPicture());

// ------------------------------ //

rect.height = 8;
rect.width = 16;
console.log(rect.getAmountInside(sq));



