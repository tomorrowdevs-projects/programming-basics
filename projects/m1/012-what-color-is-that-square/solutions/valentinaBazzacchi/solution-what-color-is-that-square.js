let position = prompt("Write a position of your Chess Board");
position = position.toUpperCase();

let letter = position.slice(0,1);
let number = position.slice(1,2);

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

// Soluzione alternativa

let position = prompt("Write a position of your Chess Board");
position = position.toUpperCase();

let letter = position.slice(0,1);
let number = position.slice(1,2);
    
let firstWhiteCol;
let firstBlackCol;

if (letter == "A" || letter == "C" || letter == "E" || letter == "G" ) {
    firstWhiteCol = true;
} else {
    firstBlackCol = true;
}
    
if (firstWhiteCol && (number % 2 == 0)) {
alert("The square is White!");
} else if (firstBlackCol && (number % 2 > 0)) {
alert("The square is White!");
} else {
alert("The square is Black!")
}