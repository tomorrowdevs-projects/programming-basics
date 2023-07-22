let flips = 0;
let averageFlips = 0;

// program is run it should perform the simulation 10 times
for (let i = 0; i <= 10; i++) {
  const coin = [];
  let j = 0;
  let control = true;
  //  simulated coins until either 3 consecutive heads of 3 consecutive tails occur
  while (control) {
    const flipSimulation = Math.floor(Math.random() * 10 + 1);
    if (flipSimulation % 2 === 0) {
      coin.push("H");
    } else {
      coin.push("T");
    }
    if(coin.length >= 3 && coin[j] === coin[j - 1] && coin[j - 1] === coin[j - 2]){
        control = false
    }
    j++;
    flips = coin.length  
}
averageFlips += flips
console.log( `${coin} (${flips} flips)` );
}
averageFlips = averageFlips / 10
console.log(`On average, ${averageFlips} flips were needed`)