// bakery sells loaves of bread for €3.49 each.  
// Day old bread is discounted by 60 percent. 

// Write a program that begins by reading the number of loaves of day-old bread being purchased from the user. 
// Then your program should display:   
// - Regular price for the bread
// - Discount because it is a day old
// - Total price    

// Each of these amounts should be displayed on its own line with an appropriate label. 
// All the values should be displayed using two decimal places, 
// and the decimal points in all the numbers should be aligned when reasonable values are entered by the user.

// Example:   
// Input = 256   
// Regular price:  893.44€  
// Discount:       536.06€  
// Total price:    357.38€  

// panetteria vende pagnotte a 3,49 € l'una.
// Il pane raffermo è scontato del 60%.

// Scrivere un programma che inizi leggendo il numero di pagnotte di pane raffermo acquistate dall'utente.
// Quindi il tuo programma dovrebbe visualizzare:
// - Prezzo normale per il pane
// - Sconto perché è vecchio di un giorno
// - Prezzo totale

// Ciascuno di questi importi deve essere visualizzato su una propria riga con un'etichetta appropriata.
// Tutti i valori devono essere visualizzati utilizzando due cifre decimali,
// e i punti decimali in tutti i numeri devono essere allineati quando l'utente inserisce valori ragionevoli.

// Esempio:
// Inserimento = 256
// Prezzo normale: 893,44€
// Sconto: 536,06€
// Prezzo totale: 357,38€
let userInsert = Number(prompt("Insert the pieces: "));

let priceInteger = userInsert * 3.49
let priceDiscount = userInsert * (3.49 * 60) / 100;
let priceTotal = priceInteger - priceDiscount;

alert(`The user has purchased ${userInsert} pieces 
       Regular price ${priceInteger.toFixed(2)}€
       Discount ${priceDiscount.toFixed(2)}€
       price Total ${priceTotal.toFixed(2)}€`)
