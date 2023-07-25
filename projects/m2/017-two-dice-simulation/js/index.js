function twoDicesSumProbability(sides){
    const listSumExtractions = {};
    const dicesSumProbabilityPercentage = {};

    for (let i = 1; i <= sides; i++) {
        for (let j = 1; j <= sides; j++) {
            const dicesSum = i+j;
            
            if( listSumExtractions[dicesSum] === undefined ){
                listSumExtractions[dicesSum] = 1;
            } else {
                listSumExtractions[dicesSum]++;
            }
           
        }
    }

    if( Object.keys(listSumExtractions).length > 0 ){
        Object.keys(listSumExtractions).forEach( key => {
            dicesSumProbabilityPercentage[key] = ((listSumExtractions[key] / 36)*100).toFixed(3);
        });
    }

    return dicesSumProbabilityPercentage;
}

function rollPairOfDices(){
    let dicesRollResult = 0;

    for (let i = 0; i < 2; i++) {
        dicesRollResult += Math.floor(Math.random()*6 + 1);
    }

    return dicesRollResult;
}

function calculateOccurencesFrequency(occurences, roll){
    return (occurences/roll * 100).toFixed(1) ;
}

function init(){
    // Find dices roll occurences
    const dicesRollOccurrences = {};
    const sides = 6;

    for (let i = 2; i <= sides*2; i++) {
        dicesRollOccurrences[i] = 0;
    }

    const rolls = 1000;

    for(i = 0; i < rolls; i++){
        const dicesRollResult = rollPairOfDices();

        for( j = 2; j <= sides*2; j++ ){
            if( j === dicesRollResult ){
                dicesRollOccurrences[j]++;
                break;
            }
        }

    }
    // Now that we have dices roll occurences we can find and print them and also the frequency
    let table = '';
    const tableHead = ['Dices sum', 'Total occurences', 'Rolls frequency (%)', 'Total probability (%)'];
    
    for (let i = 0; i < tableHead.length; i++) {
        table += `${i === 0 ? '|' : ''} ${tableHead[i]} |${i === tableHead.length-1 ? '\n' : ''}`;
    }

    // Find the dices roll sum probability expressed in percentage
    const dicesSumProbabilityPercentage = twoDicesSumProbability(sides);
    
    // Design the table and add the data
    Object.keys(dicesRollOccurrences).forEach( key => {
        table += `| ${key.padStart(tableHead[0].length, ' ')} | ${dicesRollOccurrences[key].toString().padStart(tableHead[1].length, ' ')} | ${calculateOccurencesFrequency(dicesRollOccurrences[key], rolls).padStart(tableHead[2].length, ' ')} | ${dicesSumProbabilityPercentage[key].padStart(tableHead[3].length, ' ')} |\n`;
    });
    console.log(table);

    return;
}
init();