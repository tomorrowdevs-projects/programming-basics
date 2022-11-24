/*In order to win the top prize in a particular lottery, one must match all 6 numbers on his or her ticket to the 6 numbers between 1 and 49 that are drawn by the lottery organizer. Write a program that generates a random selection of 6 numbers for a lottery ticket. Ensure that the 6 numbers selected do not contain any duplicates. Display the numbers in ascending order.*/

function getNumbersLottery() {
  
    let lotteryNumber = [];
    const arrayRandomNumber = []; // array for random numbers
    
    while(lotteryNumber.length < 6) {
      
      const minNumber = 1;
      const maxNumber = 49;
      
      arrayRandomNumber.push(Math.floor(Math.random()*(maxNumber - minNumber + 1) + minNumber));
      // "new set" method helps me delete duplicates
      lotteryNumber = [...new Set(arrayRandomNumber)];
     
    } 
     return lotteryNumber.sort(function (a, b) { return a - b;  });
  }
  
  alert(`The numbers drawn are: ${getNumbersLottery()}`)