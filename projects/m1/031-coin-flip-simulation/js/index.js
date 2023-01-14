let randomNumber = 0;
let coinFlipValue = ["H", "T"];
let resultsCoinFlipValue = [];
let count = 1;
let index = 0;
let totalIndex = 0;
let message = "";

for(let i = 0; i < 10; i++){
  
  while(count < 3){

    // Generate random number
    randomNumber = Math.round(Math.random() * 1);
    
    // Insert in the resultsCoinFlipValue array the result
    resultsCoinFlipValue.push(coinFlipValue[randomNumber]);

    // Compare each value with the previous one until you find 3 equal values
    if(resultsCoinFlipValue[index] == resultsCoinFlipValue[index - 1]){
      count++;
    } else {
      count = 1;
    }
    
    // Increase counter
    index++;
  }

  // Print output
  totalIndex += index;
  message += resultsCoinFlipValue.join(" ") + " (" + index + " flips)\n";

  // Reset variables
  resultsCoinFlipValue = [];
  count = 1;
  index = 0;
  
}

totalIndex = totalIndex / 10;

alert(message + "\nOn average, " + totalIndex + " flips were needed.");