// It is commonly said that one human year is equivalent to 7 dog years. However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog years. Write a program that implements the conversion from human years to dog years described in the previous paragraph. Ensure that your program works correctly for conversions of less than two human years and for conversions of two or more human years. Your program should display an appropriate error message if the user enters a negative number.

const humanAge = parseFloat(prompt("Inserisci l'età umana"));
const dogYearsMin = 10.5;
const dogYearsAdult = 4;
const babyDogAge = humanAge * dogYearsMin;
const firstTwoDogYears = 21;
const adultDogAge = humanAge - 2;

if (humanAge <= 0) {
  alert('Hai inserito un numero non valido');
} else if (humanAge <= 2) {
  alert(`L'età canina è ${babyDogAge}`);
} else {
  alert(`L'età canina è ${firstTwoDogYears + adultDogAge * dogYearsAdult}`);
}
