// La tokenizzazione è il processo di conversione di una stringa in un elenco di sottostringhe, note come token.
// In molte circostanze, è molto più facile lavorare con un elenco di token rispetto alla stringa originale perché l'originale
// la stringa può avere una spaziatura irregolare. In alcuni casi è necessario anche un lavoro sostanziale per determinare dove
// un gettone finisce e inizia quello successivo.
// In un'espressione matematica, i token sono elementi quali operatori, numeri e parentesi.
// I simboli operatori che considereremo in questo (e nei successivi) problemi sono *, /, ˆ, - e +.
// Gli operatori e le parentesi sono facili da identificare perché il token è sempre un singolo carattere,
// e il personaggio non fa mai parte di un'altra pedina.
// I numeri sono leggermente più difficili da identificare perché il token può essere composto da più caratteri.
// Qualsiasi sequenza di cifre consecutive deve essere trattata come un token numerico.

// Scrivete una funzione che prenda come unico parametro una stringa contenente un'espressione matematica e la suddivida in un elenco di token.
// Ogni token deve essere una parentesi, un operatore o un numero.
// (Per semplicità lavoreremo solo con numeri interi in questo problema). Restituisce l'elenco di token come unico risultato della funzione.

// Puoi presumere che la stringa passata alla tua funzione contenga sempre un'espressione matematica valida composta da parentesi,
// operatori e numeri interi. Tuttavia, la tua funzione deve gestire quantità variabili di spazi bianchi (inclusi gli spazi bianchi)
// tra questi elementi.
// Includere un programma principale che dimostri la funzione di tokenizzazione leggendo un'espressione dell'utente e stampando l'elenco dei token. 
// Assicurarsi che il programma principale non venga eseguito quando il file contenente la soluzione viene importato in un altro programma.

// Tokenizing is the process of converting a string into a list of substrings, known as tokens.   
// In many circumstances, a list of tokens is far easier to work with than the original string because the original 
// string may have irregular spacing. In some cases substantial work is also required to determine where 
// one token ends and the next one begins.
// In a mathematical expression, tokens are items such as operators, numbers and parentheses.  
// The operator symbols that we will consider in this (and subsequent) problems are *, /, ˆ, - and +.  
// Operators and parentheses are easy to identify because the token is always a single character, 
// and the character is never part of another token. 
// Numbers are slightly more challenging to identify because the token may consist of multiple characters. 
// Any sequence of consecutive digits should be treated as one number token.

// Write a function that takes a string containing a mathematical expression as its only parameter and breaks it into a list of tokens. 
// Each token should be a parenthesis, an operator, or a number. 
// (For simplicity we will only work with integers in this problem). Return the list of tokens as the function’s only result.

// You may assume that the string passed to your function always contains a valid mathematical expression consisting of parentheses, 
// operators and integers. However, your function must handle variable amounts of whitespace (including no whitespace)
// between these elements. 
// Include a main program that demonstrates your tokenizing function by reading an expression from the user and printing the list of tokens. 
// Ensure that the main program will not run when the file containing your solution is imported into another program.




function tokenizer(string) {
    let tokens = string.match(/\d+|\+|\-|\*|\/|\(|\)|=/g);
    let tokensString = tokens.join('\n')
    return tokensString;
}

const expression = "5 + (40 + 55)";
console.log(`token: \n${tokenizer(expression)}`);


