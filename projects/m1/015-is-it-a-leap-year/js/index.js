// # Is It a Leap Year?

// Most years have 365 days.   
// However, the time required for the Earth to orbit the Sun is actually slightly more than that.   
// As a result, an extra day, February 29, is included in some years to correct for this difference. 
// Such years are referred to as leap years.

// The rules for determining whether a year is a leap year follow:  
// - Any year that is divisible by 400 is a leap year.
// - Of the remaining years, any year that is divisible by 100 is not a leap year. 
// - Of the remaining years, any year that is divisible by 4 is a leap year.
// - All other years are not leap years.  

// Write a program that **reads a year** from the user and 
// displays a message indicating **whether it is a leap year**.

// # È un anno bisestile?

// La maggior parte degli anni ha 365 giorni.
// Tuttavia, il tempo necessario alla Terra per orbitare attorno al Sole è in realtà leggermente superiore.
// Di conseguenza, in alcuni anni viene incluso un giorno in più, il 29 febbraio, per correggere questa differenza.
// Tali anni sono indicati come anni bisestili.

// Seguono le regole per determinare se un anno è un anno bisestile:
// - Qualsiasi anno divisibile per 400 è un anno bisestile.
// - Degli anni rimanenti, qualsiasi anno divisibile per 100 non è un anno bisestile.
// - Degli anni rimanenti, qualsiasi anno divisibile per 4 è un anno bisestile.
// - Tutti gli altri anni non sono bisestili.

// Scrivi un programma che **legge un anno** dall'utente e
// visualizza un messaggio che indica **se si tratta di un anno bisestile**.

let yearInput = +prompt(`Please, you insert the year: `);
const Pattern = /[0-9]/g;


if (Pattern.test(yearInput)== true) {
    if (yearInput % 400 === 0) {
        alert(`the year you entered is a leap year`);

    } else if (yearInput % 100 === 0) {
        alert(`the year you entered is a not leap year`);

    } else if (yearInput % 4 === 0) {
        alert(`the year you entered is a leap year`);

    } else {
        alert(`the year you entered is a not leap year`);
    }

} else {
    alert(`you have not entered valid data`);
}