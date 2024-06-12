const prompt = require('prompt-sync')();

var width = parseFloat(prompt("Insert width: "));
var lenght = parseFloat(prompt("Insert lenght: "));

area = width * lenght;

console.log("The area of a room is: " + area + " m");