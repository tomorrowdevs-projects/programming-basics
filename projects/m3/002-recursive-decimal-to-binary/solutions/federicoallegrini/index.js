function recursiveBinaryConversion(number, binary="") {
    if(!number){
        return "Insert a valid number!";
    }
    number = parseInt(number);
    if(number<0){
        return "Insert only positive number!";
    }
    if(number===0 || number===1 ){
        return String(number) + binary;
    }
    binary = String(number%2) + binary;
    return recursiveBinaryConversion(number/2,binary)
}

const inputNumber = prompt('Insert a number:')
alert(recursiveBinaryConversion(inputNumber));