// Consider a sequence of integers that is constructed in the following manner:

// Start with any positive integer as the only term in the sequence While the last term in the sequence is not equal to 1 do If the last term is even then Add another term to the sequence by dividing the last term by 2 using floor division Else Add another term to the sequence by multiplying the last term by 3 and adding 1

// The Collatz conjecture states that this sequence will eventually end with one when it begins with any positive integer. Although this conjecture has never been proved, it appears to be true. Create a program that reads an integer, n, from the user and reports all of the values in the sequence starting with n and ending with one. Your program should allow the user to continue entering new n values (and your program should continue displaying the sequences) until the user enters a value for n that is less than or equal to zero.

// The Collatz conjecture is an example of an open problem in mathematics. While many people have tried to prove that it is true, no one has been able to do so. Information on other open problems in mathematics can be found on the Internet.

let intNum;
const numList = [];

do {
  intNum = parseInt(prompt('Inserisci un numero maggiore di 0'));
  numList.push(intNum);
  if (intNum == 1) {
    break;
  }

  if (numList[numList.length - 1] % 2 == 0) {
    let secondValue = Math.floor(numList[numList.length - 1] / 2);
    numList.push(secondValue);
  } else if (numList[numList.length - 1] % 2 !== 0) {
    let anotherValue = numList[numList.length - 1] * 3 + 1;
    numList.push(anotherValue);
  }
} while (intNum > 0);
console.log(numList);
