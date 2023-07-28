// # Decimal to Binary

// Write a program that converts a decimal (base 10) number to binary (base 2). 
// Read the decimal number from the user as an integer and then use the division algorithm shown below to perform the conversion. 
// When the algorithm completes, result contains the binary representation of the number. 
// Display the result, along with an appropriate message.

// Let *result* be an empty string
// Let *q* represent the number to convert 
// **repeat**
//     Set *r* equal to the remainder when *q* is divided by 2
//     Convert *r* to a string and add it to the beginning of result
//     Divide *q* by 2, discarding any remainder, and store the result back into *q*
// **until** *q* is 0

// # Da decimale a binario

// Scrivi un programma che converte un numero decimale (base 10) in binario (base 2).
// Legge il numero decimale dall'utente come numero intero e quindi utilizza l'algoritmo di divisione mostrato di seguito per eseguire la conversione.
// Al termine dell'algoritmo, result contiene la rappresentazione binaria del numero.
// Visualizza il risultato, insieme a un messaggio appropriato.

// Lascia che *result* sia una stringa vuota
// Lascia che *q* rappresenti il ​​numero da convertire
// **ripetere**
// Imposta *r* uguale al resto quando *q* è diviso per 2
// Converti *r* in una stringa e aggiungila all'inizio del risultato
// Dividi *q* per 2, scartando qualsiasi resto, e memorizza il risultato in *q*
// **fino a** *q* è 0

let q = +prompt("Please, enter a decimal number to convert to binary: ");
let result = []; 

while(q === NaN || q == ''){
   q = prompt("Repeat and enter only numbers, please!")
}
while (q !== 0) {
    let r = Math.trunc(q % 2);
    result.push(r.toString());
    q = parseInt(q / 2);
}

result = result.reverse();
resultString = result.join("")
alert(`Your number converted to binary is ${resultString}!`);