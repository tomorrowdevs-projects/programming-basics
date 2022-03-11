// Declare the x, y coordinates of the first point and ask the user for the value
let firstX = +prompt("Enter the first x-coordinate");
let firstY = +prompt("Enter the first y-coordinate");

/* Declare the variables prevX and prevY with a value equal to the coordinates of the first point.
   This way they keep the values ​​of firstX and firstY which will be used for counting the last side */
let prevX = firstX;
let prevY = firstY;
let nextX;
let nextY;
let side;
let perimeter = 0;
  
// Use the while loop to enter all the coordinates and calculate the sides. Put the exit condition at the beginning.
while (nextX != " ") {
  nextX = prompt("Enter the next x-coordinate blank to quit");
   switch (nextX) {
   case " ":
   break;
   
   default:
   nextY = +prompt("Enter the next y-coordinate");
   side = Math.sqrt((+nextX - prevX)**2 + (+nextY - prevY)**2);
   perimeter += side;
   prevX = nextX;
   prevY = nextY;  
   } // After calculating the distance between the two points, the variables prevX & Y take the value of nextX & Y
}
// Calculate the last side with firstX and firstY variables
side = Math.sqrt((+nextX - firstX)**2 + (+nextY - firstY)**2);
perimeter += side;
alert("The perimeter of that polygon is " + perimeter);