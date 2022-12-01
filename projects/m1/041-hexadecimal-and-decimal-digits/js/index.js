
let convertChoice = prompt("---- Hexadecimal and Decimal Digits ---- \nWould you like to convert from decimal to hexadecimal (press '1') or hexadecimal to decimal (press '2')? ");

let inputNumber = prompt("Insert you number:  "); 

function int2hex (inputNumber) {

    let remainderArray = [];

    while (inputNumber > 0) {
        let remainder = parseInt(inputNumber % 16);
        let hex = remainder.toString(16);
        remainderArray.push(hex);
        inputNumber = parseInt(inputNumber / 16);    
    }

    alert(remainderArray.reverse().join("").toUpperCase());

}

function hex2int (inputNumber) {
    let digitArray = inputNumber.split("");
    digitArray = digitArray.reverse();
    let hexDigit = 0;

    for (let i = 0; i < digitArray.length; i ++)
    {   
        hexDigit += (parseInt(digitArray[i], 16)) * Math.pow(16, i);
    }
    alert(hexDigit);

}


if (convertChoice === "1") {
    int2hex(inputNumber);

} else if (convertChoice === "2")  {
    hex2int(inputNumber);

} else {
    alert("Please, enter a valid input!");
    location.reload();
}