

//Perimeter of a polygom:

// Declaring the x and  y coordinates:

const firstXCord = +prompt("Type the first x-coordinate");

const firstYCord = +prompt("Type the first y-coordinate");

// Declaring the variables:

let prevXCord = firstXCord;

let prevYCord = firstYCord;

let nextXCord;

let nextYCord;

let side;

let perimeter = 0;
  
// Use the while loop to verify all conditions.

//if it's not equal to empty string " " (blank) keep looping

while (nextXCord != " ") {

  nextX = prompt("Type the next x-coordinate blank to quit the process");
   switch (nextXCord) {
   case " ":
   break;
   
   default:
   nextYCord = +prompt("Type the next y-coordinate");

   side = Math.sqrt((+nextXCord - prevXCord)**2 + (+nextYCord - prevYCord)**2);

   perimeter += side;

   prevXCord = nextXCord;

   prevYCord = nextYCord; 

   } 
}

// Calculate the last side with firstXCord and firstYCord variables:

side = Math.sqrt((+nextXCord - firstX)**2 + (+nextYCord - firstY)**2);

perimeter += side;

alert("The perimeter of the polygon is: " + perimeter);