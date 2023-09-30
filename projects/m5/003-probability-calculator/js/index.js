const readline = require('readline-sync');
const { Hat, experiment } = require('./functions');

let hatBalls = {};

while (true) {
    const color = readline.question('Colore pallina: ');
    if (color === '') break;

    const count = parseInt(readline.question(`Quante palline ${color} vuoi inserire? `));
    hatBalls[color] = count;
}

const hat = new Hat(hatBalls);

let expectedBalls = {};

while (true) {
    const color = readline.question('Ora decidi quali palline vuoi estrarre per verificare la probabilità. (lascia vuoto per terminare)\nColore pallina: ');
    if (color === '') break;

    const count = parseInt(readline.question(`Quante palline ${color} vuoi estrarre? `));
    expectedBalls[color] = count;
}

const num_experiments = parseInt(readline.question('Quanti esperimenti vuoi eseguire? '));

const probability = experiment(hat, expectedBalls, Object.values(expectedBalls).reduce((a, b) => a + b, 0), num_experiments);

console.log(`La probabilità di estrarre le palline desiderate in ${num_experiments} estrazioni è circa: ${(probability * 100).toFixed(2)}%`);