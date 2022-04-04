// far inserire all'utente i vari dati

let Days = prompt('enter days');
let Hours = prompt ('enter h');
let Minutes = prompt ('enter m')
let Seconds = prompt ('enter seconds')

//dichiaro quanti secondi ci sono in un giorno, in un minuto e in un ora

let secondsforday = 86400;
let secondforminutes = 3600;
let secondforhours = 60;

//calcolo i secondi totali

let totalseconds = Days * secondsforday + Hours * secondforhours + Minutes * secondforminutes + Seconds

alert(`The total number of second is: ${totalseconds}`)

