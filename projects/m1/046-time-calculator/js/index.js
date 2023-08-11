// ### Time Calculator

// Write a function named `add_time` that takes in two required parameters and one optional parameter:
// * a start time in the 12-hour clock format (ending in AM or PM) 
// * a duration time that indicates the number of hours and minutes
// * (optional) a starting day of the week, case insensitive

// The function should add the duration time to the start time and return the result.

// If the result will be the next day, it should show `(next day)` after the time. If the result will be more than one day later, it should show `(n days later)` after the time, where "n" is the number of days later.

// If the function is given the optional starting day of the week parameter, then the output should display the day of the week of the result. The day of the week in the output should appear after the time and before the number of days later.

// Below are some examples of different cases the function should handle. Pay close attention to the spacing and punctuation of the results.
// ```py
// add_time("3:00 PM", "3:10")
// # Returns: 6:10 PM

// add_time("11:30 AM", "2:32", "Monday")
// # Returns: 2:02 PM, Monday

// add_time("11:43 AM", "00:20")
// # Returns: 12:03 PM

// add_time("10:10 PM", "3:30")
// # Returns: 1:40 AM (next day)

// add_time("11:43 PM", "24:20", "tueSday")
// # Returns: 12:03 AM, Thursday (2 days later)

// add_time("6:30 PM", "205:12")
// # Returns: 7:42 AM (9 days later)
// ```

// Do not import any Python libraries. Assume that the start times are valid times. The minutes in the duration time will be a whole number less than 60, but the hour can be any whole number.

//### Calcolatrice del tempo

// Scrivi una funzione chiamata `add_time` che accetta due parametri obbligatori e un parametro facoltativo:
// * un'ora di inizio nel formato 12 ore (che termina con AM o PM)
// * un tempo di durata che indica il numero di ore e minuti
// * (facoltativo) un giorno iniziale della settimana, senza distinzione tra maiuscole e minuscole

// La funzione dovrebbe aggiungere la durata all'ora di inizio e restituire il risultato.

// Se il risultato sarà il giorno successivo, dovrebbe mostrare `(giorno successivo)` dopo l'ora. Se il risultato sarà più di un giorno dopo, dovrebbe mostrare `(n giorni dopo)` dopo l'ora, dove "n" è il numero di giorni dopo.

// Se alla funzione viene fornito il parametro facoltativo del giorno di inizio della settimana, l'output dovrebbe visualizzare il giorno della settimana del risultato. Il giorno della settimana nell'output dovrebbe apparire dopo l'ora e prima del numero di giorni successivi.

// Di seguito sono riportati alcuni esempi di diversi casi che la funzione dovrebbe gestire. Presta molta attenzione alla spaziatura e alla punteggiatura dei risultati.
// ```py
// add_time("3:00 PM", "3:10")
// # Ritorna: 18:10

// add_time("11:30", "2:32", "lunedì")
// # Ritorna: 14:02, lunedì

// add_time("11:43 AM", "00:20")
// # Ritorna: 12:03

// add_time("22:10", "3:30")
// # Ritorni: 1:40 AM (giorno successivo)

// add_time("23:43", "24:20", "martedì")
// # Resi: 00:03, giovedì (2 giorni dopo)

// add_time("18:30", "205:12")
// # Resi: 7:42 AM (9 giorni dopo)
// ```

// Non importa alcuna libreria Python. Si supponga che gli orari di inizio siano orari validi. I minuti nel tempo di durata saranno un numero intero inferiore a 60, ma l'ora può essere un numero intero qualsiasi.

let timeInput = prompt("Please, enter an hour:", "12:30 PM");
let timeAdd = prompt("Plese, enter the  amount of time to add: ", "3:30");
let dayInput = prompt("Please, enter the start day of the counter: ").toUpperCase();
let days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

let pmRegex = /[pP]/;
let amRegex = /[aA]/;

function addTime(timeInput,timeAdd,dayInput){
    let timeInput2 = timeInput.split(" ");
    let timeArray = timeInput2.split(":");

    let hour = parseInt(timeArray[0]);
    let minute = parseInt(timeArray[1]);

    let timeAdd2 = timeAdd.split(" ")
    let timeAddArray = timeAdd2.split(":");

    let hourAdd = parseInt(timeAddArray[0]);
    let minuteAdd = parseInt(timeAddArray[1]);

    let amPmDisplay = "";
    let amPmCount = 0;

    let totalMinute = ((hour * 60) + minute) + ((hourAdd * 60) + minuteAdd);
    let newHour = Math.floor(totalMinute / 60);
    let newMinute = Math.floor(totalMinute % 60);
    let hourFinal = newHour;

    if (amRegex.test(timeInput) === true) {
        amPmCount = 0;

     } else if (pmRegex.test(timeInput) === true){
         amPmCount = 1;
     }

     while (hourFinal > 11){

        hourFinal = hourFinal - 12;
        amPmCount ++;

    }


 if (hourFinal == 0) hourFinal = hourFinal + 12;


            if (amPmCount % 2 === 0) {
                amPmDisplay = "AM";

            } else {
                amPmDisplay = "PM";
            }

            let daysPassed = amPmCount / 2;


            dayInput = dayInput.replace(/\W+/g, "");
            let dayOut = "";

            for (i = 0; i < days.length; i++) {

                if (days[i] === dayInput.toUpperCase()) {

                    if (daysPassed < 1) {

                        dayOut = dayInput.toUpperCase();

                    } else {

                        if (daysPassed < 7) {

                            dayOut = days[i + daysPassed];

                        } else {

                            dayOut = days[i + (daysPassed  -  7)]
                        }


                    }
                }


                }



    alert(hourFinal.toString().padStart(2, "0") + ":" + newMinute.toString().padStart(2, "0") + " " + amPmDisplay + " " + dayOut);

}

addTime(timeInput, timeAdd, dayInput);