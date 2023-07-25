function generateBingoCard() {
    const ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];
    const headers = ['B', 'I', 'N', 'G', 'O'];
    const bingoColumns = {};

    for (let i = 0; i < 5; i++) {
        const column = [];
        let nums = Array.from({length: ranges[i][1] - ranges[i][0] + 1}, (_, idx) => idx + ranges[i][0]);
        nums = shuffle(nums);  
        for (let j = 0; j < 5; j++) {
            column.push(nums[j]);  
        }
        bingoColumns[headers[i]] = column;
    }

    return bingoColumns;
}


function generateBingoCalls() {
    const calls = [];
    const letters = ['B', 'I', 'N', 'G', 'O'];
    const ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];

    for (let i = 0; i < letters.length; i++) {
        for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
            calls.push(letters[i] + j);
        }
    }
    
    return calls;
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let bingoCalls = generateBingoCalls();

bingoCalls = shuffle(bingoCalls);

function checkBingoCard(card) {
    let headers = ['B', 'I', 'N', 'G', 'O'];

    for (let i = 0; i < headers.length; i++) {
        if (headers.every(header => card[header][i] === 0)) {
            return true;
        }
    }

    for (let header of headers) {
        if (card[header].every(num => num === 0)) {
            return true;
        }
    }

    return false;
}

function markNumber(card, call) {
    let header = call[0];
    let number = parseInt(call.slice(1));
    let index = card[header].indexOf(number);
    if (index !== -1) {
        card[header][index] = 0;
    }
}

function simulateGame() {
    let card = generateBingoCard();
    let calls = shuffle(generateBingoCalls());

    let count = 0;
    while (!checkBingoCard(card)) {
        markNumber(card, calls[count]);
        count += 1;
    }

    return count;
}

function main() {
    let results = [];
    for (let i = 0; i < 1000; i++) {
        results.push(simulateGame());
    }

    let min = Math.min(...results);
    let max = Math.max(...results);
    let avg = results.reduce((a, b) => a + b, 0) / results.length;
    console.log(`Minimum calls to win: ${min}`);
    console.log(`Maximum calls to win: ${max}`);
    console.log(`Average calls to win: ${avg.toFixed(2)}`);
}

main();
