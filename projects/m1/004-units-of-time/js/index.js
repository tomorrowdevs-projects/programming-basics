// Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
// Compute and display the total number of seconds represented by this duration.

// Creare un programma che legga una durata dall'utente come numero di giorni, ore, minuti e secondi.
// Calcola e visualizza il numero totale di secondi rappresentato da questa durata.

// const date = new Date;;

// console.log(date)

// let day = date.getDay();

// console.log(day);

// let hours = date.getHours();
//  console.log(hours);

//  let minutes = date.getMinutes();
//  console.log(minutes);

//  let seconds = date.getSeconds();
//  console.log(seconds);


 const date2 = new Date(2019, 11, 24);
 console.log(date2);

 let days= 24;
 let hour= 24;
 let hourInDays = hour * days;
 console.log(hourInDays);
 let minutes = 60;
 let minutesInDays = minutes * hourInDays;
 console.log(minutesInDays);
 let seconds = 60;
 let secondsInDays = seconds * minutesInDays;
 console.log(secondsInDays);


 
