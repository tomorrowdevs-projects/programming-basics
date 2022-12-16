// reading the x and y coordinates for the first point on the perimeter
const firstXCoordinate = parseInt(prompt('Please, enter x coordinate'));
const firstYCoordinate = parseInt(prompt('Please, enter y coordinate'));
let xCoordinate = firstXCoordinate;
let yCoordinate = firstYCoordinate;
// declares the variable for the new coordinates
let nextXCoordinate;
let nextYCoordinate;
// declares the variable for the perimeter
let calcPerimeter;
let perimeter = 0;
//reading pairs of values until the user enters a blank line for the x-coordinate
while (nextXCoordinate != " "){
    nextXCoordinate = prompt('Enter x coordinate') 
    switch(nextXCoordinate) {
      case " ":
        calcPerimeter = Math.sqrt((+nextXCoordinate - xCoordinate)**2 + (+nextYCoordinate - yCoordinate)**2);
        perimeter += calcPerimeter;
        break;
      default:
        nextYCoordinate = parseInt(prompt('Enter y coordinate'));
        calcPerimeter = Math.sqrt((+nextXCoordinate - xCoordinate)**2 + (+nextYCoordinate - yCoordinate)**2);
        perimeter += calcPerimeter;
        xCoordinate = nextXCoordinate;
        yCoordinate = nextYCoordinate;
        break;
    }
}
alert('The perimeter is: ' + perimeter)