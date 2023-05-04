/* 

In order to win the top prize in a particular lottery, one must match all 6 numbers on his or her ticket to the 6 numbers between 1 and 49 that are drawn by the lottery organizer. 
Write a program that generates a random selection of 6 numbers for a lottery ticket. 
Ensure that the 6 numbers selected do not contain any duplicates.
Display the numbers in ascending order.

*/

let listRandomNumbers = [];

while(listRandomNumbers.length !== 6) {

  let randomNumber = Math.floor(Math.random() * 49) + 1;
  if(!listRandomNumbers.includes(randomNumber)){
    listRandomNumbers.push(randomNumber);
  }

}

const listNumbersCasualOrdered = listRandomNumbers.sort(function(a, b){
  return a - b;
});

console.log(listNumbersCasualOrdered);