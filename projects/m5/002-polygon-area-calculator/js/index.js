const shapeCalculator = require("./shape_calculator");

const rectangle = new shapeCalculator.Rectangle(10, 5);
console.log(rectangle.getArea());
rectangle.setHeight(3);
console.log(rectangle.getPerimeter());
console.log(rectangle.getString());
console.log(rectangle.getPicture());

const square = new shapeCalculator.Square(9);
console.log(square.getArea());
square.setSide(4);
console.log(square.getDiagonal());
console.log(square.getString());
console.log(square.getPicture());

rectangle.setHeight(8);
rectangle.setWidth(16);

console.log(rectangle.getAmountInside(square));
