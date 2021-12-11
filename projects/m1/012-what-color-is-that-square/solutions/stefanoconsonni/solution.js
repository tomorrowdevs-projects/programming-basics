const position = prompt("Please enter a chessboard position (i.e. b2, f5...):").toLowerCase();

const letter = position.slice(0, 1);
const number = position.slice(1);

let colBeginsWhite;
let colBeginsBlack;

if (letter == "a" || letter == "c" || letter == "e" || letter == "g") {
	colBeginsWhite = true;
} else {
	colBeginsBlack = true;
}

if (colBeginsWhite && number % 2 == 0) {
	alert("The square is white");
} else if (colBeginsBlack && number % 2 > 0) {
	alert("The square is white");
} else {
	alert("The square is black");
}
