// const prompt = require("prompt-sync")({ sigint: true}) ;

function sumAskedNumbers(){
    const askedNumber = prompt('Enter a number');

    if(askedNumber === ''){
        return '0.0';
    }
    
    return(parseFloat(askedNumber) + parseFloat(sumAskedNumbers()));
}

function init(){
    const sumOfAskedNumbers = sumAskedNumbers();
    console.log(sumOfAskedNumbers);

    return;
} 
init();