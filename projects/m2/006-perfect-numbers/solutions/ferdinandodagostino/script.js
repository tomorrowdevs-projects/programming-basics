// An integer, n, is said to be perfect when the sum of all of the proper divisors of n is equal to n. For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7 and 14, and 1 + 2 + 4 + 7 + 14 = 28. Write a function that determines whether or not a positive integer is perfect. Your function will take one parameter. If that parameter is a perfect number then your function will return True. Otherwise it will return False. In addition, write a main program that uses your function to identify and display all of the perfect numbers between 1 and 10,000.

const userInt = parseInt(prompt('Inserisci un numero intero'));

function getProperDivisor(number) {
  let divider;
  const divisorsArray = [];
  divider = number - 1;

  while (divider > 0) {
    divider--;
    if (number % divider == 0) {
      divisorsArray.push(divider);
    }
  }
  if (divisorsArray.length > 0) {
    const divisorsSum = (accumulator, curr) => accumulator + curr;
    const divisorsSumResult = divisorsArray.reduce(divisorsSum);
    if (divisorsSumResult === number) {
      console.log(`${number} is a perfect number`);
    } else {
      return false;
    }
  }
}

getProperDivisor(userInt);

for (let index = 1; index <= 10000; index++) {
  getProperDivisor(index);
}
