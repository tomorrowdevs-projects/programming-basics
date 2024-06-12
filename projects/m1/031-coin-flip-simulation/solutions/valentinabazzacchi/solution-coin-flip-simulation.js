let flip; // single random flip of a coin
let flips = []; // list of flips (T or H) until reaching 3 consecutive occurrences of the same outcome
let flipsCounter = 0; // number of flips until reaching 3 consecutive occurrences of the same outcome  
let flipsDisplay; // keeps the list of coin flips for each simulation
let flipsCounterDisplay; // keeps the number of coin flips for each simulation 
let display = ""; // displays all coin flips and the number of flips of each simulation together
let average = 0; // keeps the average of how many flips are needed before reaching the winning outcome

// "for loop" repeats the simulation of coin flips for 10 times
for (let i = 0; i < 10; i++) {
    // "while loop" repeats the coin flips until either 3 consecutive heads or 3 consecutive tails occur
    while (true) {
        // these methods allow the simulated coin flips to be fair (equal probability that 0 or 1 comes out)
        flip = Math.floor(Math.random()*2);
        // used "conditional (ternary) operator" to assign the value 0 and 1 to tail and head, respectively
        flip = (Math.floor(Math.random()*2) == 0) ? "T" : "H"; 
        flipsCounter += 1;
        flips.push(flip);
        // condition to break the loop of coin flips
        if (flips[flips.length-1] == flips[flips.length-2] && flips[flips.length-2] == flips[flips.length-3]) {
        break; }
    
    } // end while loop
    
    // Assigned the value of flips and flipsCounter to 2 new variables to empty them before the next coin flips 
    flipsDisplay = flips; 
    flips = [];
    flipsCounterDisplay = flipsCounter;
    flipsCounter = 0;
    // added lines to be displayed for each simulation with the list of coin flips and the number of flips 
    display += (flipsDisplay.join(" ") + " (" + flipsCounterDisplay + " flips)\n");
    // added total number of flips of each simulation
    average += flipsCounterDisplay; 

} // end for loop
  
average = average / 10; // calculate the average (total number of flips divided by ten simulation)
alert(display + "\nOn average, " + average + " flips were needed.");