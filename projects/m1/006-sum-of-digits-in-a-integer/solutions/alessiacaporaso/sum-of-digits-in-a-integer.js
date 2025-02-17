//chiedere l'inserimento di 4 numeri
const userNumber= prompt('Please, enter 4 number: ', 1234);
//dividere i numeri
const number = userNumber.split("");
//convertire i numeri da stringa a numeri
const numberArray = number.map(Number);
//sommare i numeri
let sum = 0;
for (const value of numberArray) {
  sum += value;
}
alert(`The sum is: ${sum}`)