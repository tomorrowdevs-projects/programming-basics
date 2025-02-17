const prompt = require('prompt-sync')();
const year = parseInt(prompt('Inserisci un anno: '), 10);

let day_of_the_week = (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;

switch (day_of_the_week) {
  case 0: day_of_the_week = "Domenica";
    break;
  case 1: day_of_the_week = "Lunedì";
    break;
  case 2: day_of_the_week = "Martedì";
    break;
  case 3: day_of_the_week = "Mercoledì";
    break;
  case 4: day_of_the_week = "Giovedì";
    break;
  case 5: day_of_the_week = "Venerdì";
    break;
  case 6: day_of_the_week = "Sabato";
    break;
}
console.log(`Il primo giorno del tuo anno è ${day_of_the_week}`);

