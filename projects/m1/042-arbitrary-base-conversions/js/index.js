// # Arbitrary Base Conversions

// Write a program that allows the user to convert a number from one base to another. 
// Your program should support bases between 2 and 16 for both the input number and the result number. 
// If the user chooses a base outside of this range then an appropriate error message should be displayed and the program should exit. 
// Divide your program into several functions, including a function that converts from an arbitrary base to base 10, 
//  function that converts from base 10 to an arbitrary base, and a main program that reads the bases and input number from the user.

// # Conversioni base arbitrarie

// Scrivi un programma che permetta all'utente di convertire un numero da una base all'altra.
// Il tuo programma dovrebbe supportare basi comprese tra 2 e 16 sia per il numero di input che per il numero di risultato.
// Se l'utente sceglie una base al di fuori di questo intervallo, dovrebbe essere visualizzato un messaggio di errore appropriato e il programma dovrebbe uscire.
// Dividi il tuo programma in diverse funzioni, inclusa una funzione che converte da una base arbitraria a base 10,
// funzione che converte da base 10 a una base arbitraria e un programma principale che legge le basi e il numero di input dall'utente.

let numberInput = parseInt(prompt(`Enter any number you like`));
let baseNumberInput = +prompt(`Enter the base of the your number`);
let conversionNumberInput = +prompt(`Enter the base you would like to convert your previously chosen number into `);



function totalProgram(){
        conversionNumberInArbitrary(numberInput,baseNumberInput);
        conversionNumber(finalNumberConversion,conversionNumberInput);
        console.log(`the number: ${numberInput} is converted before in base ${baseNumberInput} and after in base ${conversionNumberInput}
                     1° = ${numberInput} 2° = ${conversionNumberInArbitrary(numberInput,baseNumberInput)} 3° = ${conversionNumber(finalNumberConversion,conversionNumberInput)}`)
}
function conversionNumberInArbitrary(numberInput,baseNumberInput){
    let convertedNumber = parseInt(numberInput).toString(baseNumberInput);
    // console.log(convertedNumber)
     return convertedNumber;
}
let finalNumberConversion = conversionNumberInArbitrary(numberInput,baseNumberInput);

function conversionNumber( number,conversionNumberInput){
    if(conversionNumberInput  == 10){
        number = numberInput
        // console.log(number)
        return number
    }
    else if(conversionNumberInput == baseNumberInput){
        number = finalNumberConversion;
        return number
    }else{
     number = parseInt(number).toString(conversionNumberInput)
    //  console.log(number)
     return number;
    }
}

 totalProgram()
