// Is a String a Palindrome?

// A string is a palindrome if it is identical forward and backward. For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words. 

// Write a program that reads a string from the user and uses a loop to determine whether or not it is a palindrome. 
// Display the result, including a meaningful output message.

// Aibohphobia is the extreme or irrational fear of palindromes. 
// This word was constructed by prepending the -phobia suffix with it’s reverse, resulting in a palindrome. 
// Ailihphilia is the fondness for or love of palindromes. It was constructed in the same manner from the -philia suffix.

// Una stringa è un palindromo?

// Una stringa è palindromo se è identica avanti e indietro. Ad esempio "anna", "civic", "level" e "hannah" sono tutti esempi di parole palindromiche.

// Scrivere un programma che legga una stringa dall'utente e utilizzi un ciclo per determinare se si tratta o meno di un palindromo.
// Visualizza il risultato, incluso un messaggio di output significativo.

// Aibohphobia è la paura estrema o irrazionale dei palindromi.
// Questa parola è stata costruita anteponendo il suffisso -phobia con il suo contrario, risultando in un palindromo.
// Ailihphilia è la predilezione o l'amore per i palindromi. È stato costruito nello stesso modo dal suffisso -philia.

let wordInput = prompt(`Enter a word: `).toUpperCase();

let wordArray = wordInput.split('');
let wordArrayReverse = wordArray.reverse();

let wordArrayStringReverse =  wordArrayReverse.join('');

if(wordInput == wordArrayStringReverse){
    alert(`The string is palindrome`);
} else{
    alert(`The string is not palindrome`)
}