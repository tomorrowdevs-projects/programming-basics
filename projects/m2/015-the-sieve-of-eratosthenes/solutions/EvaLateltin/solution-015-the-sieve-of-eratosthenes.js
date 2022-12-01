const startTime = performance.now();

const limitNumber = +prompt("Enter the limit number.");
const listOfNumbers = Array(limitNumber).fill(true);

for (let i = 2; i < limitNumber; i++) {
  if (listOfNumbers[i]) {
    for (let j = i + i; j < limitNumber; j += i) {
      listOfNumbers[j] = false;
    }
  }
}

const primeNumbers = listOfNumbers
  .map((element, index) => {
    return element === true ? index : 0;
  })
  .splice(2);

console.log(primeNumbers);

const endTime = performance.now();

console.log(`Time to elaborate: ${(endTime - startTime) / 1000} seconds`);
