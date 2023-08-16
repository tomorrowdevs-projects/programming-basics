// # Days in a Month

// Write a function that determines how many days there are in a particular month. 
// Your function will take two parameters: The month as an integer between 1 and 12, and the year as a four digit integer. 
// Ensure that your function reports the correct number of days in February for leap years. 
// Include a main program that reads a month and year from the user and displays the number of days in that month. 

// # giorni in un mese

// Scrivi una funzione che determini quanti giorni ci sono in un particolare mese.
// La tua funzione prenderà due parametri: il mese come numero intero compreso tra 1 e 12 e l'anno come numero intero a quattro cifre.
// Assicurati che la tua funzione riporti il numero corretto di giorni di febbraio per gli anni bisestili.
// Include un programma principale che legge un mese e un anno dall'utente e visualizza il numero di giorni in quel mese.

let monthInput = +prompt('Enter a month: ');
let yearInput = +prompt('Enter a year: ');


function showDaysInMonth (monthInput, yearInput) {
    let showDays = new Date(yearInput, monthInput, 0).getDate();
    alert(`the days in that month are: ${showDays}`);
}

showDaysInMonth(monthInput,yearInput);