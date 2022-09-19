// Calcolo del deposito

alert("Please input the amount of bottles over 1 liter and the amount of bottles equal or less than 1 liter");

let bottleOver1Liter = prompt ('How many bottles over 1 liter?',0);
let bottleLess1Liter = prompt ('How many bottles less than 1 liter?',0);

let deposit = bottleOver1Liter * 0.25 + bottleLess1Liter * 0.10;
let roundedDeposit = deposit.toFixed(2);

alert('your deposit is: ' + roundedDeposit + ' $');


// calcolo del deposito totale rispetto alle bottiglie con funzione
//function deposit(bottleOver1Liter, bottleLess1Liter) {
//return (bottleOver1Liter * 0.25 + bottleLess1Liter * 0.10);
//}
//console.log(deposit(1, 1));
