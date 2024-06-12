/*Write a program that computes the perimeter of a polygon. Begin by reading the x and y coordinates for the first point on the perimeter of the polygon from the user. Then continue reading pairs of values until the user enters a blank line for the x-coordinate. Each time you read an additional coordinate you should compute the distance to the previous point and add it to the perimeter. When a blank line is entered for the x-coordinate your program should add the distance from the last point back to the first point to the perimeter. Then the perimeter should be displayed. Sample input and output values are shown below. The input values entered by the user are shown in bold.

Enter the first x-coordinate: 0
Enter the first y-coordinate: 0
Enter the next x-coordinate (blank to quit): 1 Enter the next y-coordinate: 0
Enter the next x-coordinate (blank to quit): 0 Enter the next y-coordinate: 1
Enter the next x-coordinate (blank to quit):
The perimeter of that polygon is 3.414213562373095 */


const firstX = Number(prompt("Enter the first X-coordinate:"))
const firstY = Number(prompt("Enter the first Y-coordinate:"))
let nextX;
let nextY;
// Assign the variables the value of First so that I can have values to initialize in the loop
let prevX = firstX;
let prevY = firstY;
// Empty array for input distance values
const distancePoint = []

// For each loop I add the result of the distance of the points to the distancePoint array.
while (nextX != " ") {
  let nextX = prompt("Enter the next X-coordinate (blank to quit):")
  
  if (nextX === " ") {
    let squareRoot = Math.sqrt((prevX - firstX)**2 + (prevY - firstY)**2);
    distancePoint.push(squareRoot);
    break;
    
  } else {
    nextY = Number(prompt("Enter the next Y-coordinate:"))
    let squareRoot = Math.sqrt((prevX - +nextX)**2 + (prevY - nextY)**2);
    distancePoint.push(squareRoot);
    prevX = nextX;
    prevY = nextY; 
  }
}
// sum value in array
let sum = 0;
for (let i = 0; i < distancePoint.length; i++) {
    sum += distancePoint[i];
  }
const perimeter = sum; 

alert(`The perimeter of that polygon is ${perimeter}`)