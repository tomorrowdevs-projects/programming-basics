const total = prompt("Inserisci il totale da pagare");
const money = prompt("Inserisci con quanto desideri pagare");

if (money < total) {
    alert('Attenzione... Il contante non è sufficente!');
    //  money = prompt("Inserisci un'altro importo");
}

const rest = Math.round((money - total) * 100) / 100;

let restCents = (parseFloat(rest) * 100);
console.log(restCents);

const coins = [200, 100, 50, 20, 10, 5, 2, 1];
const arrayChange = [0, 0, 0, 0, 0];

for (let i = 0; i < coins.length; i++) {
    // let count = 0;
    let moneyNumber = parseInt(restCents / coins[i]);
    // let rest = restCents;
    if (moneyNumber < 1) {
        arrayChange[i] = 0;
    } else {
        arrayChange[i] = moneyNumber;
        console.log(coins[i], arrayChange[i]);
        console.log(restCents - (arrayChange[i] * coins[i]))
        restCents = restCents - (arrayChange[i] * coins[i]);
    }

}

alert('Devi ricevere ' + rest + ' Euro.   La macchina ti darà ' + arrayChange[0] + ' monete da 2 Euro, ' + arrayChange[1] + ' monete da 1 Euro, ' 
+arrayChange[2] + ' monete da 0.50 Euro, '+ arrayChange[3] + ' monete da 0.20 Euro, ' + arrayChange[4] + ' monete da 0.10 Euro, '
+ arrayChange[5] + ' monete da 0.05 Euro, ' + arrayChange[5] + ' monete da 0.02 Euro e ' + 
arrayChange[7] + ' monete da 0.01 Euro.' );
