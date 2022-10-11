//001-total-the-value

const prompt = require('prompt-sync')();


function totalTheValues(){

    let value = parseFloat(prompt('Enter the value (empty to stop enetring values): '));
    
    if ((isNaN(value))){
        return 0.0;
    } else {
        return value += totalTheValues();
    }; 
};

console.log(`This is the total values ${totalTheValues().toFixed(1)} `)

