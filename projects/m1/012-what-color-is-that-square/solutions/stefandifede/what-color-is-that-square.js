const squareInput = prompt("insert the name of a square");

//array of letters of the chessboard
const squareLetters = ["a", "b", "c", "d", "e", "f", "g", "h"]
//split input in letter and number into a new array
let splittedInput = [];
splittedInput = squareInput.split('')

//assuming that letters of a chessboard have a value from 1 for the "a" to 8 for the "h"
//sum the number of the squareInput and the value of the letter inside the array(+1 because arrays are inizialized to 0)
//if this sum is odd the square is black, otherwhise the square is white
function color() {
    if ((Math.floor(splittedInput[1]) + (squareLetters.indexOf(splittedInput[0])+1)) % 2 == 0) {
        alert(squareInput + " is black")
    } else {
        alert(squareInput + " is white")
    }
}

color()