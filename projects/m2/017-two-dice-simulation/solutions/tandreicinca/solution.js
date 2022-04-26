// I have to write a function that simulate a roll of two dice (a. so in this function I will use the method Math.random to get the result) 2. once done it I will make this function work for 1000 times (for each total occurring I will display the roll number) 3. I will display a table with each total and the percentage of that total

function rollDice() {
    return Math.floor(Math.random() * 11) + 2           // this the function of the roll
}
const table = {};
const rolls = [];                           // here I create an array where to push the rolls
const frequencies = [];
const probabilities = [];
let roll;
for (i = 0; i < 1000; i++) {                // here the for loop of 1000 rolls
    roll = rollDice()
    rolls.push(roll)
    let times = 0;
    for (i = 0; i < rolls.length; i++) {
        if (roll === rolls[i]) {
            times += 1
        }
    }
    let frequency = times / rolls.length * 100      // here the formula to find the frequency of roll
    frequencies.push(frequency)
    let probability
    switch (roll) {                                 // here I calculate the probability of each roll
        case 2:
        case 12:
            probability = 1 / 36 * 100;
            break;
        case 3:
        case 11:
            probability = 2 / 36 * 100;
            break;
        case 4:
        case 10:
            probability = 3 / 36 * 100;
            break;
        case 5:
        case 9:
            probability = 4 / 36 * 100;
            break;
        case 6:
        case 8:
            probability = 5 / 36 * 100;
            break;
        case 7:
            probability = 6 / 36 * 100;
            break;
        default:
            break;
    }
    probabilities.push(probability)    
}

rolls.join(',')
frequencies.join(',')
probabilities.join(',')

for (i = 0; i < rolls.length; i++) {
    table.rolls = rolls;
}
for (i = 0; i < rolls.length; i++) {
    table.frequency = frequencies;
}
for (i = 0; i < rolls.length; i++) {
    table.probability = probabilities;
}



/*let first = document.getElementById('rolls')
let second = document.getElementById('frequency')
let third = document.getElementById('probability')
for (let i = 0; i < rolls.length; i++) {
    let line = document.createElement('p')
    first.appendChild(line);
    line.setAttribute('class', 'line');
    let something = '';
    something += rolls[i]
    document.getElementsByClassName('line').innerHTML = something;    
}
*/
// here I tried to display the results in a table but I didn't have success


console.table([table])

