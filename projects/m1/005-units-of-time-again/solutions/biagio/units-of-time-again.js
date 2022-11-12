const prompt = require('prompt-sync')();


var seconds = prompt("How many seconds: ");

var days = Math.floor(seconds / 60 / 60 / 24);
var seconds = seconds - (days * 60 * 60 * 24);

var hours = Math.floor(seconds / 60 / 60);
var seconds = seconds - (hours * 60 * 60);


var minutes = Math.floor(seconds / 60);
var seconds = seconds - (minutes * 60);

console.log(`${days}dd:${hours}hh:${minutes}mm:${seconds}ss`);