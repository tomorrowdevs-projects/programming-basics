// Create a program that begins by selecting a random integer between 1 and 100.
// After the initial integer has been selected, generate 99 additional random integers between 1 and 100.
// After you have displayed 100 integers your program should display the maximum value encountered, along with the number of times the maximum value was updated during the process.
let collectionNumber = [];
let maximumValue = 0;
let changeValue = 0;

while (collectionNumber.length <= 99) {
  const casualNumber = Math.floor(Math.random() * 100 + 1); //generate random integer
  collectionNumber.push(casualNumber);
  for (let value of collectionNumber) { // check element in the array
    if (value > maximumValue) {
      maximumValue = value; // check maximum integer
      changeValue++; // acheck how many times the number is updated
    }
  }
}
alert(`The maximum value found was ${maximumValue}\nThe maximum value was updated ${changeValue} times`);
