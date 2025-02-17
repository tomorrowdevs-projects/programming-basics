const {
    generateBingoCard, 
    generateBingoCalls, 
    shuffle, 
    checkBingoCard, 
    markNumber, 
} = require('./functions.js');

function simulateGame() {
    // Genera una cartella bingo e una lista di chiamate
    let card = generateBingoCard();
    let calls = shuffle(generateBingoCalls());

    // Conta il numero di chiamate necessarie per vincere
    let count = 0;
    while (!checkBingoCard(card)) {
        markNumber(card, calls[count]);
        count += 1;
    }

    return count;
}

function main() {
     // Simula 1.000 giochi
     let results = [];
     for (let i = 0; i < 1000; i++) {
         results.push(simulateGame());
     }
 
     // Calcola e stampa le statistiche
     let min = Math.min(...results);
     let max = Math.max(...results);
     let avg = results.reduce((a, b) => a + b, 0) / results.length;
     console.log(`Minimum calls to win: ${min}`);
     console.log(`Maximum calls to win: ${max}`);
     console.log(`Average calls to win: ${avg.toFixed(2)}`);
 }

main();

module.exports = { simulateGame, main };