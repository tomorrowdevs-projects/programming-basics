// 0 = testa
// 1 = croce

let headsOrTails = [];
let heads = 0;
let tails = 0;
let totFlips = 0;
let message = '';
let average;

for (let i = 0; i < 10; i++) {

    while (heads < 3 && tails < 3) {

        let coinFlips = Math.round(Math.random());

        totFlips += 1;

        if (coinFlips === 0) {
            heads += 1;
            tails = 0;
            headsOrTails.push('H');

        } else {
            tails += 1;
            heads = 0;
            headsOrTails.push('T');
        }
    }
    message += `${headsOrTails.join(' ')} (${headsOrTails.length} Flips)\n`;

    headsOrTails = [];
    heads = 0;
    tails = 0;
}


average = totFlips /= 10;
alert(`${message} \nOn average ${average} flips were needed.`)

