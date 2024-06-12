const headOrTail = ["H", "T"] /** @type {string} array with the 2 possible score of the coin flip */
let results = [];  /** initializing an empty array where to storage the results of a single simulation */
let resultsStorage = []; /** initializing an empty array where to storage the results of each simulation */
let flipsCounter = 0;  /**@type {number} the counter of flips*/
let simulationCounter = 0; /**@type {number} counter of simulations */
let flipsCounterArr = [];

/**pick a random index of headOrTaill array, to obtain a score of the coin flip, then push it into results array and repeat until 3 flips returns the same result */
function coinFlip() {
    let randomIndex = Math.floor(Math.random()*2);
    results.push(headOrTail[randomIndex])
    flipsCounter++;
    if (results[results.length-1] != results[results.length-2] || results[results.length-1] != results[results.length-3]){
    coinFlip();
    }
}

/** after 3 same results, push the results into the array, reinitilize results array and restart the coin flips. Repeat the process 10 times. */
function simulation10Times() {
    while(simulationCounter <= 10){
    resultsStorage[simulationCounter] = results
    results = [];
    flipsCounter = 0; 
    coinFlip();
    flipsCounterArr.push(flipsCounter)
    simulationCounter++
    console.log(results, flipsCounterArr)
}
}

/**Calculate the average of flips necessary to obtain 3 same results*/
let average = 0;
function calculatingAverage() {
    let total = 0;
    for (let i = 0; i < flipsCounterArr.length; i++) {
       total = total + flipsCounterArr[i];
    } average = total / (flipsCounterArr.length) 
    console.log(average)
}

simulation10Times()
calculatingAverage()

alert(resultsStorage[1] + " (" + flipsCounterArr[0] + " flips)" + "\n" + resultsStorage[2] + " (" + flipsCounterArr[1] + " flips)" + "\n" +resultsStorage[3] + " (" + flipsCounterArr[2] + " flips)" + "\n" +resultsStorage[4] + " (" + flipsCounterArr[3] + " flips)" + "\n" + resultsStorage[5] + " (" + flipsCounterArr[4] + " flips)" + "\n" + resultsStorage[6] + " (" + flipsCounterArr[5] + " flips)" + "\n" + resultsStorage[7] + " (" + flipsCounterArr[6] + " flips)" + "\n" + resultsStorage[8] + " (" + flipsCounterArr[7] + " flips)" + "\n" +resultsStorage[9] + " (" + flipsCounterArr[8] + " flips)" + "\n" + resultsStorage[10] + " (" + flipsCounterArr[9] + " flips)" + "\n" + "On average, " + average.toFixed(1) + " flips were needed")
