// # What Day of the Week

// The following formula can be used to determine the day of the week for January 1 in a given year:

// day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

// The result calculated by this formula is an integer that represents the day of the week.   
// Sunday is represented by 0. 
// The remaining days of the week following in sequence through to Saturday, which is represented by 6.

// **Use the formula** above to write a program that **reads a year from the user** 
// and **reports the day of the week for January 1 of that year**.   
// The output from your program **should include the full name of the day of the week**, not just the integer returned by the formula.

// Example:    
// Input: 2023  
// Output: Wednesday

// # Quale giorno della settimana

// La seguente formula può essere utilizzata per determinare il giorno della settimana per il 1 gennaio in un dato anno:

// day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

// Il risultato calcolato da questa formula è un numero intero che rappresenta il giorno della settimana.
// La domenica è rappresentata da 0.
// I restanti giorni della settimana seguono in sequenza fino al sabato, che è rappresentato da 6.

// **Usa la formula** sopra per scrivere un programma che **legge un anno dall'utente**
// e **riporta il giorno della settimana del 1° gennaio di quell'anno**.
// L'output del tuo programma **dovrebbe includere il nome completo del giorno della settimana**, non solo il numero intero restituito dalla formula.

// Esempio:
// Ingresso: 2023
// Uscita: mercoledì


let yearInput = +prompt(`enter the year to find the first day of that year:`,2000);

const DAYOFTHEWEEK =  ((yearInput + Math.floor((yearInput - 1) / 4) - Math.floor((yearInput - 1) / 100) + Math.floor((yearInput - 1) / 400)) % 7)
console.log(DAYOFTHEWEEK)


let dayComparison = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

Object.freeze(dayComparison);




for( let number in dayComparison){
    if(DAYOFTHEWEEK == number){
        alert(`the first day of the year is ${dayComparison[number]}`);
    }
};