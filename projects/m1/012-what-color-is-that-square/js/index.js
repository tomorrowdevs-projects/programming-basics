//what-color-is-that-square-m1-012


const squareColor = prompt('enter a letter and a number e.g. A1:').toUpperCase();

const letter = squareColor.slice(0,1);
const number = squareColor.slice(1,2);

switch (letter) {
case "A":
case "C":
case "E":
case "G":
    if (number % 2 == 0) {
    alert("The square is White!");
    } else {
    alert("The square is Black!");
    }
break;

case "B":
case "D":
case "F":
case "H":
    if (number % 2 == 0) {
    alert("The square is Black!");
    } else {
    alert("The square is White!");
    }
}
