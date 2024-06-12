/*What's the minimum number of times you have to flip a coin before you can have three consecutive flips that result in the same outcome (either all three are heads or all three are tails)?
What's the maximum number of flips that might be needed? How many flips are needed on average? 
In this exercise we will explore these questions by creating a program that simulates several series of coin flips.

Create a program that uses a random number generator to simulate flipping a coin several times. 
The simulated coin should be fair, meaning that the probability of heads is equal to the probability of tails. 
Your program should flip simulated coins until either 3 consecutive heads of 3 consecutive tails occur. 
Display an H each time the outcome is heads, and a T each time the outcome is tails, with all of the outcomes for one simulation on the same line. 
Then display the number of flips that were needed to reach 3 consecutive occurrences of the same outcome. 
When your program is run it should perform the simulation 10 times and report the average number of flips needed. 
Sample output is shown below:

H T T T (4 flips)
H H T T H T H T T H H T H T T H T T T (19 flips)
T T T (3 flips)
T H H H (4 flips)
H H H (3 flips)
T H T T H T H H T T H H T H T H H H (18 flips)
H T T H H H (6 flips)
T H T T T (5 flips)
T T H T T H T H T H H H (12 flips)
T H T T T (5 flips)

On average, 7.9 flips were needed.*/

// create a function for heads or tails
function getCoinFace() {
    num = Math.round(Math.random()) % 2;
    const face = (num === 0) ? "H": "T";
    return face;
  }
  
  let totalFlips = 0;
  
  // Loop for simulation 10 times flips
  for (i = 0; i < 10; i++) {
  
  let head = 0;
  let tail = 0;
  let count = 0;
  let sequence = []
    
    while(head < 3 && tail < 3) {
      
      coinFace = getCoinFace();
      
      if (coinFace === "H") {
        head += 1;
        tail = 0;
        count += 1;
        sequence.push(coinFace);
          
      } else {
        head = 0;
        tail += 1;
        count += 1;
        sequence.push(coinFace); 
      }
      
    } totalFlips += count;
      alert(`${sequence} (${count} flips)`)
  } 
  alert(`\nOn average, ${totalFlips / 10 } flips were needed.`)