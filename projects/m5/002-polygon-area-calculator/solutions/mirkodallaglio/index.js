const shape_calculator = require('./shape_calculator');

//Create instances of 2 rectangles
const rect = new shape_calculator.Rectangle(30,51);
const rect2 = new shape_calculator.Rectangle(5,3)

//Show all the methods of the class
console.log(rect.show_all(), '\n')

//Show how many times a rectangle fits inside another
console.log(`The ${rect2.view()} fits ${rect.get_amount_inside(rect2)} times inside a ${rect.view()}\n`)

console.log('--------------------------------------------\n');

//Create instances of 2 rectangles
const square = new shape_calculator.Square(20)
const square2 = new shape_calculator.Square(21)

//Show all the methods of the class
console.log(square.show_all(), '\n')

//Show how many times a square fits inside another
console.log(`The ${square2.view()} fits ${square.get_amount_inside(square2)} times inside a ${square.view()}\n`)

//Change sides and recalculate everything
square2.side = 16;
console.log(`The ${square2.view()} fits ${square.get_amount_inside(square2)} times inside a ${square.view()}\n`)

//Change width and recalculate everything
square2.width = 6;
console.log(`The ${square2.view()} fits ${square.get_amount_inside(square2)} times inside a ${square.view()}\n`)

//Change height and recalculate everything
square2.height = 10;
console.log(`The ${square2.view()} fits ${square.get_amount_inside(square2)} times inside a ${square.view()}\n`)
