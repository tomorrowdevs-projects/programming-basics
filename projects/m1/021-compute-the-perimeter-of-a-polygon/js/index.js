const firstX = parseInt(prompt("Enter the first x-coordinate:"));
const firstY = parseInt(prompt("Enter the first y-coordinate:"));
let currentX = firstX;
let currentY = firstY;
let nextX;
let nextY;
let perimeter = 0;
let side = 0;

while(true){

  nextX = parseInt(prompt("Enter the next x-coordinate (blank to quit):"));

  if(isNaN(nextX)){
    break;
  }

  nextY = parseInt(prompt("Enter the next y-coordinate (blank to quit):"));
  side = Math.sqrt((nextX - currentX)**2 + (nextY - currentY)**2);
  perimeter += side;
  currentX = parseInt(nextX);
  currentY = parseInt(nextY);
} 

side = Math.sqrt((currentX - firstX)**2 + (currentY - firstY)**2);
perimeter += side;

alert("The perimeter of that polygon is: " + perimeter);