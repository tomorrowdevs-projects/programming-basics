// The length of a month varies from 28 to 31 days.   
// In this exercise you will create a program that reads **the name of a month** from the user as a string.   
// Then your program should display the number of days in that month.   
// Display **28 or 29 days** for **February** so that leap years are addressed.  

// Example:  
// Input =   
// Output = 

// La durata di un mese varia da 28 a 31 giorni.
// In questo esercizio creerai un programma che legge **il nome di un mese** dall'utente come una stringa.
// Quindi il tuo programma dovrebbe visualizzare il numero di giorni in quel mese.
// Visualizza **28 o 29 giorni** per **Febbraio** in modo che gli anni bisestili vengano presi in considerazione.

// Esempio:
// Ingresso =
// Uscita =

let months =  {
    "aprile" : 30,
    "giugno" : 30,
    "settembre": 30,
    "novembre": 30,
    "gennaio": 31,
    "marzo": 31,
    "maggio": 31,
    "luglio" : 31,
    "agosto" : 31,
    "novembre" : 31,
    "dicembre" : 31
}

let inputMonths = prompt(`You insert the month: `);

for(let month in months){
    if(inputMonths == month){
        alert(`the month of ${inputMonths} is made up of: ${months[month]} days`)
    } else if(inputMonths == "febbraio"){
        alert(`the month is made up of 28 or 29 days, depending of the year`);
        break;
    }

}