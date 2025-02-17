// 010-random-lottery-numbers

const sixNumbers = [];
let randomNumber = 0;

while ((sixNumbers.includes(randomNumber) === false) || (sixNumbers.length < 6)){
    randomNumber = Math.floor(Math.random() * 49) + 1;
    sixNumbers.push(randomNumber);;
};

console.log(sixNumbers);