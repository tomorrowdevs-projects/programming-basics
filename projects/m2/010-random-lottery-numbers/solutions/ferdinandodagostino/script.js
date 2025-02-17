// In order to win the top prize in a particular lottery, one must match all 6 numbers on his or her ticket to the 6 numbers between 1 and 49 that are drawn by the lottery organizer. Write a program that generates a random selection of 6 numbers for a lottery ticket. Ensure that the 6 numbers selected do not contain any duplicates. Display the numbers in ascending order.

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const lottoNumbers = [];

//genero 6 numeri random
for (let index = 1; index <= 6; index++) {
  const rndInt = randomIntFromInterval(1, 49);
  lottoNumbers.push(rndInt);
}

//creo un set per togliere gli eventuali duplicati
const lottoNumbersAvoidDuplicates = new Set(lottoNumbers);
let lottoNumbersSanitized;

//se la lunghezza del set è minore di 6, vuol dire che è stato rimosso un duplicato, di conseguenza genero un altro numero random e lo aggiungo al set
if (lottoNumbersAvoidDuplicates.size < 6) {
  const rndInt = randomIntFromInterval(1, 49);
  lottoNumbersAvoidDuplicates.add(rndInt);
  lottoNumbersSanitized = Array.from(lottoNumbersAvoidDuplicates);
} else {
  lottoNumbersSanitized = Array.from(lottoNumbersAvoidDuplicates);
}

//mostro i numeri
console.log(
  lottoNumbersSanitized.sort(function (a, b) {
    return a - b;
  })
);
