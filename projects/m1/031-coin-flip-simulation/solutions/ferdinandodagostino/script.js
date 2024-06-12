// What's the minimum number of times you have to flip a coin before you can have three consecutive flips that result in the same outcome (either all three are heads or all three are tails)? What's the maximum number of flips that might be needed? How many flips are needed on average? In this exercise we will explore these questions by creating a program that simulates several series of coin flips.

// Create a program that uses a random number generator to simulate flipping a coin several times. The simulated coin should be fair, meaning that the probability of heads is equal to the probability of tails. Your program should flip simulated coins until either 3 consecutive heads of 3 consecutive tails occur. Display an H each time the outcome is heads, and a T each time the outcome is tails, with all of the outcomes for one simulation on the same line. Then display the number of flips that were needed to reach 3 consecutive occurrences of the same outcome. When your program is run it should perform the simulation 10 times and report the average number of flips needed. Sample output is shown below:

// const headsOrTails = [];
// const flipcounts = [];
// let threeInARow = false;

// while (threeInARow == false) {
//   const coinFlip = Math.floor(Math.random() * 10 + 1);
//   if (coinFlip <= 5) {
//     headsOrTails.push('H');
//   } else {
//     headsOrTails.push('T');
//   }
//   for (let index = 0; index < headsOrTails.length; index++) {
//     const element = headsOrTails[index];
//     if (element == headsOrTails[index + 1]) {
//       if (element == headsOrTails[index + 2]) {
//         threeInARow = true;
//         console.log('il numero di flip ottenuti è ' + headsOrTails.length);
//       }
//     }
//   }
// }

// console.log(headsOrTails.length);

// flipcounts.push(headsOrTails.length);

// console.log(flipcounts);
// const headsOrTails = [];
// const flipcounts = [];
// let threeInARow = false;

// for (let i = 0; i < 10; i++) {
//   const coinFlip = Math.floor(Math.random() * 10 + 1);
//   if (coinFlip <= 5) {
//     headsOrTails.push('H');
//   } else {
//     headsOrTails.push('T');
//   }
//   for (let index = 0; index < headsOrTails.length; index++) {
//     const element = headsOrTails[index];
//     if (element == headsOrTails[index + 1]) {
//       if (element == headsOrTails[index + 2]) {
//         console.log('the number of flips obtained is ' + headsOrTails.length);

//         threeInARow = true;
//       }
//     }
//   }

//   if (threeInARow) {
//     flipcounts.push(headsOrTails.length);
//     console.log(flipcounts);
//     break;
//   }
// }

// if (!threeInARow) {
//   console.log('No matches were found');
// }
// console.log(headsOrTails);

const flips = [];

for (let i = 0; i < 10; i++) {
  let threeInARow = false;
  results = '';

  while (threeInARow == false) {
    const coinFlip = Math.random();
    results += coinFlip < 0.5 ? 'H' : 'T';

    if (results.includes('HHH') || results.includes('TTT')) {
      threeInARow = true;
      console.log(results);
      flips.push(results.length);
    }
  }
}

console.log(flips);

function getAverage(total, num) {
  return total + num;
}

const average = flips.reduce(getAverage) / flips.length;

console.log(`Average: ${average}`);
