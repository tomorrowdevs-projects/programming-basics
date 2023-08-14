// # Gregorian Date to Ordinal Date

// An ordinal date consists of a year and a day within it, both of which are integers. 
// The year can be any year in the Gregorian calendar while the day within the year ranges from one, 
// which represents January 1, through to 365 (or 366 if the year is a leap year) which represents December 31. 
// Ordinal dates are convenient when computing differences between dates that are a specific number of days (rather than months). 
// For example, ordinal dates can be used to easily determine whether a customer is within a 90-day return period, 
// the sell-by date for a food-product based on its production date, and the due date for a baby.

// Write a function named "ordinal date" that takes three integers as parameters.

// These parameters will be a day, month and year respectively. 
// The function should return the day within the year for that date as its only result. 
// Create a main program that reads a day, month and year from the user and displays the day within the year for that date. 
// Your main program should only run when your file has not been imported into another program.

// # Da data gregoriana a data ordinale

// Una data ordinale è composta da un anno e un giorno al suo interno, entrambi numeri interi.
// L'anno può essere qualsiasi anno del calendario gregoriano mentre il giorno all'interno dell'anno va da uno,
// che rappresenta il 1° gennaio fino al 365 (o 366 se l'anno è bisestile) che rappresenta il 31 dicembre.
// Le date ordinali sono utili quando si calcolano differenze tra date che sono un numero specifico di giorni (piuttosto che mesi).
// Ad esempio, le date ordinali possono essere utilizzate per determinare facilmente se un cliente si trova entro un periodo di restituzione di 90 giorni,
// la data di scadenza di un prodotto alimentare in base alla sua data di produzione e la data di scadenza per un bambino.

// Scrivi una funzione chiamata "data ordinale" che accetta tre numeri interi come parametri.

// Questi parametri saranno rispettivamente giorno, mese e anno.
// La funzione dovrebbe restituire il giorno all'interno dell'anno per quella data come unico risultato.
// Crea un programma principale che legge un giorno, un mese e un anno dall'utente e visualizza il giorno all'interno dell'anno per quella data.
// Il tuo programma principale dovrebbe essere eseguito solo quando il tuo file non è stato importato in un altro programma.

let yearUserInput = +prompt(`Enter the year: `);
let monthUserInput = +prompt(`Enter the month: `);
let dayUserInput = +prompt(`Enter the day: `);

while(dayUserInput === '' || dayUserInput > 31 || monthUserInput ===''|| dayUserInput ==='' || monthUserInput > 12 || isNaN(yearUserInput) || isNaN(monthUserInput)|| isNaN(dayUserInput)){
     yearUserInput = +prompt(`Enter only number in the year: `);
     monthUserInput = +prompt(`Enter only number in the year the month: `);
     dayUserInput = +prompt(`Enter only number in the day: `);
}

let daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if ( (yearUserInput % 4 === 0) && (yearUserInput % 100 !== 0) || (yearUserInput % 400 !== 0) ) {
    daysMonth[1] = 29;

} else {
    daysMonth[1] = 28;   
}

let sum = 0;

for(let i = 0; i< monthUserInput; i++){
    sum += daysMonth[i];
}

function ordinalDate(yearUserInput,monthUserInput,dayUserInput) {

    let outputDay = (sum - daysMonth[monthUserInput - 1]) + dayUserInput;
    if(isNaN(outputDay)){
        alert(`is a not a number, repeat`)
        location.reload()
    }else
    alert(`You ordinal date is: ${outputDay} day of the year: ${yearUserInput}`);

}

ordinalDate(yearUserInput,monthUserInput,dayUserInput);
