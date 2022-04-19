// 1. generate 6 random numbers between 1 and 49 (numbers must be displayed in ascendent order and duplicates are not allowed);

// let's generate these numbers
let firstNum = Math.floor(Math.random() * 49) + 1;
const ticket = [];                              //creating an array in which push the numbers
let secondNum = Math.floor(Math.random() * 49) + 1;
while (secondNum == firstNum) {
    secondNum = Math.floor(Math.random() * 49) + 1;
}
ticket.push(secondNum);
let thirdNum = Math.floor(Math.random() * 49) + 1;
while (thirdNum == firstNum || thirdNum == secondNum) {
    thirdNum = Math.floor(Math.random() * 49) + 1;
}
ticket.push(thirdNum);
let fourthNum = Math.floor(Math.random() * 49) + 1;
while (fourthNum == firstNum || fourthNum == secondNum || fourthNum == thirdNum) {
    fourthNum = Math.floor(Math.random() * 49) + 1;
}
ticket.push(fourthNum);
let fifthNum = Math.floor(Math.random() * 49) + 1;
while (fifthNum == firstNum || fifthNum == secondNum || fifthNum == thirdNum || fifthNum == fourthNum) {
    fourthNum = Math.floor(Math.random() * 49) + 1;
}
ticket.push(fifthNum);
let sixthNum = Math.floor(Math.random() * 49) + 1;
while (sixthNum == firstNum || sixthNum == secondNum || sixthNum == thirdNum || sixthNum == fourthNum || sixthNum == fifthNum) {
    fourthNum = Math.floor(Math.random() * 49) + 1;
}
ticket.push(sixthNum);

ticket.sort(function(a, b){return a - b})

alert(ticket);