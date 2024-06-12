let num;
let rest;
let result = "";
let onlyNumbers = /^[0-9]+$/;

num = prompt("Enter an integer to convert in binary");

if (!onlyNumbers.test(num) || num == 0){
alert("Not valid entry!");
} else {
    while (num > 0) {    
        rest = num % 2;
        result += String(rest);
        num = Math.floor(num / 2);
    } // fine while
alert("The binary is \n" + result);
} // fine else
  
//------------------------------------------------------//

// Method to convert a decimal number in binary
let num = +prompt("Enter an integer to convert in binary");
alert( "The binary is \n" + num.toString(2) );