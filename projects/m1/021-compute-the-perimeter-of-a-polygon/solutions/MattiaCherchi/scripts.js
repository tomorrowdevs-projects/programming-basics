let firstX = prompt('Enter the firs x-coordinate');
let firstY = prompt('Enter the firs y-coordinate');
let thisX = firstX;
let thisY = firstY;
let nextX;
let nextY;
let side = 0;
let perimeter = 0;

while(true){
nextX = prompt('Enter the next x-coordinate (blank to quit)');

if (nextX == ''){
  break;
}
  nextY = prompt('Enter the next y-coordinate');
  side = Math.sqrt((+nextX- thisX)**2 + (+nextY - thisY)**2);
  perimeter += side;
  thisX = nextX;
  thisY = nextY;


}

side = Math.sqrt((+nextX - +firstX)**2 + (+nextY - +firstY)**2);
perimeter += side;
alert("The perimeter of that polygon is " + perimeter);