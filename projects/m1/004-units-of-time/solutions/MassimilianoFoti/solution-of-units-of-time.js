/*Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
Compute and display the total number of seconds represented by this duration.*/

const secondsForAfullDay = 86400
const secondsForAhour = 3600
const secondsForAminute = 60

let numberDays = prompt ("how many days?");
numberDays = parseInt(numberDays);
let numberHours = prompt ("How many hours?");
numberHours = parseInt(numberHours);
let numberMinutes = prompt ("How many minutes?");
numberMinutes = parseInt(numberMinutes);
let numberSeconds = prompt ("How many seconds?");
numberSeconds = parseInt(numberSeconds);

console.log(numberDays * secondsForAfullDay + numberHours * secondsForAhour + numberMinutes * secondsForAminute + numberSeconds);


/* Ho inserito il parseInt in quanto senza di esso, quando il prompt mi domanda il numero di giorni o ore o minuti o secondi, se in uno di essi l'utente dovesse rispondere 0,
questo numero verrebbe inteso come una stringa, perchè il numero è racchiuso sul prompt (stringa). Per cui, il parseInt "annulla" questa stringa e anzi, trasforma questo zero in numero.
Quindi moltiplicando e quindi alla fine sommando, lo zero verrò contato come numero, come deve essere. esempio a parte, ma per far capire come
opera il parseInt: se ho "13,5" e metto il parse.Int sulla variabile, avrò
solo il 13, perchè il parseInt fa leggere solo il numero intero, per cui con la virgola non lo è*/