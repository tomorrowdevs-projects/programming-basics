const testNum = 10; // costante che viene utilizzata per indicare il numero di volte che vogliamo eseguire una serie di lanci di una moneta
let totalFlips = 0; 
let result;

for (let i = 1; i <= testNum; i++) { 
  let flips = 0, count = 0;
  let lastResult = null, result = null;


  while (count < 3) { 
    
    if (Math.random() < 0.5) { 
      result = "H"
    }else {
    result = "T"  
    } 
    flips++; 

    if (lastResult !== null && result === lastResult) {
      count++;
    } else {
      count = 1;
    } 

    lastResult = result;
  } 
  totalFlips += flips;
  console.log(`${flips} flips`);
} 

const averageFlips = totalFlips / testNum;
console.log(`On average ${averageFlips} flips were needed.`);