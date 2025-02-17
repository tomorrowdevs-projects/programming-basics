const prompt = require('prompt-sync')();

const limit = Number(prompt('Inserisci il limite superiore: '));

let numbers = [];

for(let i = 2; i <= limit; i++) {
    numbers.push(i);
}

for(let p = 2; p*p <= limit; p++) {
    if(numbers[p - 2] !== 0) {
        for(let j = p*p; j <= limit; j += p) {
            numbers[j - 2] = 0;
        }
    }
}

numbers = numbers.filter(num => num !== 0);

console.log('I numeri primi tra 2 e ' + limit + ' sono:');
console.log(numbers.join(', '));
