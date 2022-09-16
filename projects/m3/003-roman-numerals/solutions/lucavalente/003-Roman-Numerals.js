const prompt = require("prompt-sync")();

const dict = {
    "M" : 1000,
    "D" : 500,
    "C" : 100,
    "L" : 50,
    "X" : 10,
    "V" : 5,
    "I" : 1
}


function romanToDecimal(number){
    if (number == ""){
        return 0;
    } else if (number.length == 1) {
        return dict[number];
    }

    const temp = number.slice(0,3);

    if (dict[temp[0]] < dict[temp[1]]){
        return (dict[temp[1]] - (dict[temp[0]])) + romanToDecimal(number.slice(2,));
    }else{
        return dict[temp[0]] + romanToDecimal(number.slice(1,));
    }

}

const number = prompt("Enter a roman number: ")
console.log(romanToDecimal(number));


