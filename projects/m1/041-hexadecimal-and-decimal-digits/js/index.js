
const prompt = require("prompt-sync")();

const number = prompt("insert a exadecimal to convert in a base10: ");
const number2 = prompt("insert a base10 to convert in exadecimal: ");

const exadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B","C", "D", "E", "F"];

function hex2int(){
    const numberToArray = number.split("");
    numberToArray.reverse();
    let conversion = 0;
    if (!/[a-f]/.test(number) && !/\d/.test(number)){
        return "Value not valid"
    }else{
        for (i=0;i<numberToArray.length;i++){
            if (/\d/.test(numberToArray[i])){
                const calc = numberToArray[i]*16**i;
                conversion +=calc;
            } else if(/[a-f]/.test(numberToArray[i]) || /[A-F]/.test(numberToArray[i])){
                const valueCorrection = numberToArray[i].toUpperCase();
                const valueToPush = exadecimal.indexOf(valueCorrection);
                const calc = valueToPush*16**i;
                conversion +=calc;
            }
        }
    }
    
    return conversion;
}

function int2hex(){
    const newValue = [];
    let calc = parseInt(number2 / 16);
    let rest = parseInt(number2 % 16);
    while (calc > 0 ){
        newValue.push(exadecimal[rest]);
        rest = calc % 16;
        calc = parseInt(calc/16);
        newValue.push(exadecimal[rest]);
        newValue.reverse()
    }
    return newValue.join("");
}
   


console.log(hex2int());
console.log(int2hex());

