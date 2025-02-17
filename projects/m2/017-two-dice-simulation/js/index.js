
//the function "thousandSpins" utilize the random method in a for loop to simulate the thousand spins for the two dice and push the result in an array.
function thousandSpins () {

    let spins = [];

    for (i = 0; i <= 1000; i++) {
        let spin = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
        spins.push(spin);
    }

    return spins;
};

let spins = thousandSpins();



//with the function "filterResult" every single spin from the prev arrray is filtered to obtain the numbers of times a certain value from 2 to 12 appear in the array, to calculate the frequecy.
function filterResult (array) {

        let two = array.filter(x => x === 2).length;
        let three = array.filter(x => x === 3).length;
        let four = array.filter(x => x === 4).length;
        let five = array.filter(x => x === 5).length;
        let six = array.filter(x => x === 6).length;
        let seven = array.filter(x => x === 7).length;
        let eight = array.filter(x => x === 8).length;
        let nine = array.filter(x => x === 9).length;
        let ten = array.filter(x => x === 10).length;
        let eleven = array.filter(x => x === 11).length;
        let twelve = array.filter(x => x === 12).length;

        let entries = [two, three, four, five, six, seven, eight, nine, ten, eleven, twelve];

        return entries;
}


let entries = filterResult(spins);



// the "getProbability" function pushes to the "frequencies" array the result in percentage of the frequency of every possibile result obtained from the spins.
function getProbability (array, total) {

    let frequencies = [];
    for (i = 0; i < array.length; i++) {
        frequencies.push(((array[i] / total) * 100).toFixed(2))
    }

    return frequencies;
}

let frequencies = getProbability(entries, 1000);



// the "getRealProbability" pushes to an array every percentage expected by probability theory for each total.
function getRealProbability (number) {
    let frequencies = [];

    for (i = 1; i < 12; i++ ) {
        if (i < 7){ 
        frequencies.push(((i / number) * 100).toFixed(2));
        } else {
            frequencies.push((((12 - i) / number) * 100).toFixed(2))
        }
    }

    return frequencies;
}

let realFrequencies = getRealProbability(36);




// then i created this function to easily get a nice table for the final output, with the use of a for loop and 2 counters.
function getResult(arrayOne, arrayTwo, arrayThree) {

    let outputString = "";
    i = 2;
    j = 0;
    for (element of arrayOne){
        outputString += "The number of times '" + i + "' appeared ==> " + arrayOne[j] + ".\n The frequency of '" + i + "' ==> " + arrayTwo[j] + "%.\n The expected frequency of '" + i + "' ==> " + arrayThree[j] + "%.\n\n"
        i ++;
        j ++;
    }

    return outputString;
};

alert("--- Two Dice Simulation ---\n\n" + getResult(entries, frequencies, realFrequencies));