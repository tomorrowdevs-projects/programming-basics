function createBingoCard(){
    const bingoCard = {};

    function randomFive(min, max){
        let count = 5;
        const fiveNum = [];
        while(count > 0){
            fiveNum.push(Math.floor(Math.random()*(max-min+1)+min));
            --count;
        }
        return fiveNum;
    }

    bingoCard["B"] = randomFive(1, 15);
    bingoCard["I"] = randomFive(16, 30);
    bingoCard["N"] = randomFive(31, 45);
    bingoCard["G"] = randomFive(46, 60);
    bingoCard["O"] = randomFive(61, 75);

    for(let key in bingoCard){
        console.log(key + " -> " + bingoCard[key]);
    }
}

createBingoCard();