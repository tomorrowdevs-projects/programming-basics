// Words like first, second and third are referred to as ordinal numbers. In this exercise, you will write a function that takes an integer as its only parameter and returns a string containing the appropriate English ordinal number as its only result. Your function must handle the integers between 1 and 12 (inclusive). It should return an empty string if the function is called with an argument outside of this range. Include a main program that demonstrates your function by displaying each integer from 1 to 12 and its ordinal number. Your main program should only run when your file has not been imported into another program.

const integer = parseInt(prompt('Inserisci un numero da 1 a 12'));

const wordsIntArray = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  ' Ninth',
  'Tenth',
  'Eleventh',
  'Twelfth',
];

function giveIntWord(integer) {
  if (integer >= 1 && integer <= 12) alert(`${wordsIntArray[integer - 1]}`);
  else return ' ';
}

giveIntWord(integer);
