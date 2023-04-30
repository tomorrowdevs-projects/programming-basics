const prompt = require('prompt-sync')();
const userInput = prompt('Inserisci il tuo giorno di nascita nel formato 00/00: ').toLowerCase();

const slashIndex = userInput.indexOf('/');
const day = parseInt(userInput.slice(0, slashIndex));
const month = parseInt(userInput.slice(slashIndex + 1));

const intervals = [
  [12, 22, 1, 19],
  [1, 20, 2, 18],
  [2, 19, 3, 20],
  [3, 21, 4, 19],
  [4, 20, 5, 20],
  [5, 21, 6, 20],
  [6, 21, 7, 22],
  [7, 23, 8, 22],
  [8, 23, 9, 22],
  [9, 23, 10, 22],
  [10, 23, 11, 21],
  [11, 22, 12, 21],
];

let intervalIndex = -1;
for (let i = 0; i < intervals.length; i++) {
  const [startMonth, startDay, endMonth, endDay] = intervals[i];
  if (
    (month > startMonth || (month === startMonth && day >= startDay)) &&
    (month < endMonth || (month === endMonth && day <= endDay))
  ) {
    intervalIndex = i;
    break;
  }
}

const sign = ["Capricorno", "Acquario", "Pesci", "Ariete", "Toro", "Gemelli", "Cancro", "Leone", "Vergine", "Bilancia", "Scorpione", "Sagittario"];
const signIs = sign[intervalIndex];

console.log("Il tuo segno zodiacale è " + signIs);
