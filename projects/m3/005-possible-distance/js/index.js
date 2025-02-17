const prompt = require('prompt-sync')();
const { canFormSum } = require('./function');

function main() {
    const amount = prompt("Inserisci l'importo in dollari: ");
    const numberOfCoins = prompt("Inserisci il numero di monete: ");
    
    const amountInCents = amount * 100;
    
    const coins = [1, 5, 10, 25]; 

    if (canFormSum(amountInCents, coins, coins.length, numberOfCoins)) {
        console.log(`È possibile formare un totale di $${amount} utilizzando ${numberOfCoins} monete.`);
    } else {
        console.log(`Non è possibile formare un totale di $${amount} utilizzando ${numberOfCoins} monete.`);
    }
}

main();