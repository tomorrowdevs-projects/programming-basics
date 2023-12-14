const cents = parseInt(prompt('insert the change: '));

const denominations = [200, 100, 25, 10, 5, 1];
const coins = ['toonies', 'loonies', 'quarters', 'dimes', 'nickels', 'pennies'];
const change = {};

const calculateChange = (cents) => {

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const coinName = coins[i];

        const count = Math.floor(cents / denomination);

        cents %= denomination;

        if (count > 0) {
            change[coinName] = count;
        }
    }

    return change;
}

calculateChange(cents);

console.log(`${cents} cents = ${Object.entries(change).map(([coin, count]) => `${count} ${coin}`).join(', ')}.`);