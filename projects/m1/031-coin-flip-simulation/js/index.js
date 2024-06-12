// variable type number --> single random flip of a coin
let flip_Single;
// variable type number --> list of throws (T or H) until 3 consecutive occurrences of the same result are reached
let flips_Array = [];
// variable type number --> number of flips until 3 consecutive occurrences of the same result are reached 
let flips_Counter = 0;
// variable type number --> holds the list of coin flips for each simulation
let flips_Display;
// variable type number --> holds the number of coin flips for each simulation 
let flips_Counter_Display;
// variable type string --> displays all coin flips and the number of flips of each simulation together
let display_Coin_Flips = "";
// variable type number --> holds the average of how many throws are required before reaching the winning outcome
let average_Flips = 0;

// Custom " randomFunction " for generating random numbers
function randomFunction(number) {
    let random = Math.floor(Math.random() * (number));
    return Math.round(random);
}

// " FOR " loop to repeat the coin toss simulation 10 times.
for (let counter = 0; counter < 10; counter++) {

    // " WHILE " loop repeats coin flips until 3 consecutive heads or 3 consecutive tails occur.
    while (true) {
        // call to " randomFunction" function containing the " Math.random() " method to generate random numbers
        flip_Single = randomFunction(2);

        /* " IF " condition to simulate fair coin flips with equal probability of coming up:
           - " 0 " --> inserts into the " flips_Array " array the string " h " 
           - " 1 " --> inserts in the " flips_Array " array the string " t " */
        if (flip_Single === 0) {
            flip_Single = "h";
        } else {
            flip_Single = "t";
        } // " IF " condition end

        // incrementing the variable " flips_Counter " of the flips count
        flips_Counter = flips_Counter + 1;
        // inserting the individual flips into the Array " flips_Array = [] " with the " .push( element ) " method applying the " toUpperCase() " method to make each individual string uppercase
        flips_Array.push(flip_Single.toUpperCase());

        // " IF " condition to interrupt the " WHILE " cycle of coin flips with the " break " instruction
        if (flips_Array[flips_Array.length - 1] === flips_Array[flips_Array.length - 2] && flips_Array[flips_Array.length - 2] === flips_Array[flips_Array.length - 3]) {
            break;
        }// "IF" condition end
    } // "WHILE" loop end

    // assignment of the " flips_Array " array to the variable " flips_Display " to display the strings of randomly executed throws
    flips_Display = flips_Array;
    // reset array " flips_Array " before the next coin toss. 
    flips_Array = [];
    // reset variable " flips_Counter_Display " which contains the count of flips performed in precedence before the next coin flip
    flips_Counter_Display = flips_Counter;
    // reset the flips count variable to " 0 ".
    flips_Counter = 0;
    /* variable " display_Coin_Flips " where " 3 " variables are stored with the list of coin flips and the number of flips :
       - " flips_Display " --> the ".join(") " method to concatenate the individual elements of the array
       - flips_Counter_Display " --> counting the flips
       - " flips_Array " --> array of string elements " H " / " T " 
       - "  \n\n " --> to create separation lines */
    display_Coin_Flips += `${flips_Display.join(" ")} ( Flips ${flips_Counter_Display}${flips_Array} ) \n\n`;
    // addition of the total number of flips of each simulation
    average_Flips = average_Flips + flips_Counter_Display;
}// "FOR" loop end

// calculate the AVERAGE (total number of flips divided by ten simulations)
average_Flips = average_Flips / 10;
/* display variable:
    - " display_Coin_Flips " --> variable where the string array is stored 
- H " --> Head
- T " --> Tails 
    - average_Flips " --> variable where the average number of flips performed over 10 simulations is stored */
console.log(`${display_Coin_Flips}On average, ( ** " ${average_Flips} " ** ) flips were needed.`);