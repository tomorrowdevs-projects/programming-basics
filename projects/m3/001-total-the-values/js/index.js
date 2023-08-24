// const prompt = require("prompt-sync")({ sigint: true}) ;

function sumAskedNumbers(){
    const askedNumber = prompt('Enter a number');

    if(askedNumber === ''){
        return parseFloat('0.0');
    }
    
    return(parseFloat(askedNumber) + sumAskedNumbers());
}

function init(){
    const sumOfAskedNumbers = sumAskedNumbers();
    console.log(sumOfAskedNumbers);

    return;
} 
init();