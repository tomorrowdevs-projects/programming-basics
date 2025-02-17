function rollingDice(){
    const dice1 = Math.floor(Math.random() * 6 + 1);
    const dice2 = Math.floor(Math.random() * 6 + 1);
    return dice1 + dice2;
}

let nRolls = 0;
let nTotal = 0;
while( nRolls < 1000){
    rollingDice();
    if(rollingDice() === 12){
        nTotal++;
    }
    nRolls++;
}
const percentExpected = (1/36) * 100;
const percentGet = (nTotal / nRolls) * 100;

const summaryRolling = {
    "Number of rolls" : nRolls,
    "Number of total" : nTotal,
    "Percentage expected" : percentExpected,
    "Percentage get" : percentGet

};

console.log(summaryRolling);