// Dichiaro le variabili

let loaves;
let regularPrice;
let discount;
let totalPrice;

// Ricevo input dall'utente e faccio in modo che sia sempre un numero intero con Math.floor

loaves = prompt("How many loaves of day old bread are you buying?");
loaves = Math.floor( loaves );
    
// Calcolo i diversi importi arrotondando alla seconda cifra decimale con .toFixed

regularPrice = (3.49 * +loaves);
regularPrice = ( regularPrice.toFixed(2) );

discount = (60 * regularPrice)/100;
discount = ( discount.toFixed(2) );
    
totalPrice = (regularPrice - discount);
totalPrice = ( totalPrice.toFixed(2) );
    
// Nel messaggio di alert mando a capo le strighe utilizzando la sequenza di escape \n

alert("Regular Price: €" + regularPrice + "\nDiscount: €" + discount + "\nTotal Price: €" + totalPrice);