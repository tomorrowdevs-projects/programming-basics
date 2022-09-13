// Esercizio calcola il numero di ogni moneta rispetto ad un input (integer) di centesimi

let pennies; // 0.01$
let nickels; //0.05$
let dimes; // 0.10$
let quarters; // 0.25$
let loonies; // 1$
let toonies; // 2$

let centsInputFormat = /^(\d)+$/g;
let centsInput = prompt("Please enter the amount of cents (integer):", 0); 

while (! (centsInputFormat.test(centsInput))){
    let newCentsValue = prompt("Please enter the amount of cents as an INTEGER:", 0);
    centsInput = newCentsValue
}

toonies = Math.floor((centsInput / 100)/2); 
loonies = Math.floor((centsInput / 100)-(2*toonies));
quarters = Math.floor((centsInput % 100)/25);
dimes = Math.floor(((centsInput % 100)-((25*quarters)))/10);
nickels = Math.floor(((centsInput % 100)-(25*quarters)-(10*dimes))/5)
pennies = Math.floor((centsInput % 100)-(25*quarters)-(10*dimes)-(nickels*5))

alert(toonies +' coins of 2$,' +' '+ loonies +' coins of 1$,'+' '+ quarters +' coins of 0.25$,'+ ' '+ dimes +' coins of 0.10$,'+' '+ nickels  +' coins of 0.05$,'+ ' '+ pennies+' coins of 0.01$');



