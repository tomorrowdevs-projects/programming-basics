const penny = 0.01*100;
const nickel = 0.05*100;
const dime = 0.10*100;
const quarter = 0.25*100;
const loonie = 1*100;
const toonie = 2*100;
let change;
let numCoins = 0;

change = prompt("How much change I have to provide to you in cents?");

if (change % toonie != change) {                            // il resto deve essere diverso dal numeratore = controllo num > den
    numCoins = ((change - change % toonie) / toonie);       // sottraggo il resto della mod e divido per il valore della moneta
    console.log(numCoins, "toonie/s");                      // stampo il risultato
    change = (change%toonie);                               // nuovo valore del resto
}
if (change % loonie != change) {
    numCoins = ((change - change % loonie) / loonie);
    console.log(numCoins, "loonie/s");
    change = (change%loonie);
}
if (change % quarter != change) {
    numCoins = ((change - change % quarter) / quarter);
    console.log(numCoins, "quarter/s");
    change = (change%quarter);
}
if (change % dime != change) {
    numCoins = ((change - change % dime) / dime);
    console.log(numCoins, "dime/s");
    change = (change%dime);
}
if (change % nickel != change) {
    numCoins = ((change - change % nickel) / nickel);
    console.log(numCoins, "nickel/s");
    change = (change%nickel);
}
if (change % penny != change) {
    numCoins = ((change - change % penny) / penny);
    console.log(numCoins, "penny/s");
}