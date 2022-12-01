
const REDSPACES = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const BLACKSPACES = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

let spinResult = Math.floor(Math.random() * 38);
let color; 
let pay;
let numberSplit;

// SPACESNUMBER.length

alert("Hi!\nWelcome to the roulette!\nPress enter to spin the roulette!")
alert("The roulette is spinning...");


if (REDSPACES.includes(spinResult) === true) {
    color = "Red";
    pay = "Even";

} else if (BLACKSPACES.includes(spinResult) === true) {
    color = "Black";
    pay = "Odd";
}


if (spinResult >= 1 && spinResult <= 18) {
    numberSplit = "1 to 18";

} else if (spinResult >= 19 && spinResult <= 36) {
    numberSplit = "19 to 36";

}


if (spinResult >= 1 && spinResult <= 36) {
    alert("The spin resulted in " +  spinResult + "!\nPay " + spinResult + "!\nPay " + color + "!\nPay " + pay + "!\nPay " + numberSplit + "!");

} else if (spinResult === 37) {
    alert("The spin resulted in 0!\nPay 0!");

} else if (spinResult === 38) {
    alert("The spin resulted in 00!\nPay 00!");
}