// # Convert an Integer to Its Ordinal Number

// Words like *first*, *second* and *third* are referred to as ordinal numbers. 
// In this exercise, you will write a function that takes an integer as its only parameter and returns a string containing 
// the appropriate English ordinal number as its only result. 
// Your function must handle the integers between 1 and 12 (inclusive). 
// It should return an empty string if the function is called with an argument outside of this range. 
// Include a main program that demonstrates your function by displaying each integer from 1 to 12 and its ordinal number. 
// Your main program should only run when your file has not been imported into another program.

// # Converte un numero intero nel suo numero ordinale

// Parole come *primo*, *secondo* e *terzo* sono indicati come numeri ordinali.
// In questo esercizio scriverai una funzione che accetta un numero intero come unico parametro e restituisce una stringa contenente
// il numero ordinale inglese appropriato come unico risultato.
// La tua funzione deve gestire i numeri interi compresi tra 1 e 12 (inclusi).
// Dovrebbe restituire una stringa vuota se la funzione viene chiamata con un argomento al di fuori di questo intervallo.
// Includi un programma principale che dimostri la tua funzione visualizzando ogni numero intero da 1 a 12 e il suo numero ordinale.
// Il tuo programma principale dovrebbe essere eseguito solo quando il tuo file non è stato importato in un altro programma.

let insertNumber = +prompt(`Insert the number enter a number from 1 to 12`);

function ordinalNumber(number){
    switch(number){
        case 1:
            return alert(`Number integer: ${number}, Number Ordinal: First`);
        case 2:
            return alert(`Number integer: ${number}, Number Ordinal: Second`);
        case 3:
            return alert(`Number integer: ${number}, Number Ordinal: Third`);
        case 4:
            return alert(`Number integer: ${number}, Number Ordinal: Fourth`);       
        case 5:
            return alert(`Number integer: ${number}, Number Ordinal: Fifth`);
        case 6:
            return alert(`Number integer: ${number}, Number Ordinal: Sixth`);  
        case 7:
            return alert(`Number integer: ${number}, Number Ordinal: Seventh`);    
        case 8:
            return alert(`Number integer: ${number}, Number Ordinal: Eighth`);
        case 9:
            return alert(`Number integer: ${number}, Number Ordinal: Nineth`);    
        case 10:
            return alert(`Number integer: ${number}, Number Ordinal: Tenth`);
        case 11:
            return alert(`Number integer: ${number}, Number Ordinal: Eleventh`);
        case 12:
            return alert(`Number integer: ${number}, Number Ordinal: Twelfth`);
        default:
            return alert("");                
    }

} 

ordinalNumber(insertNumber);

