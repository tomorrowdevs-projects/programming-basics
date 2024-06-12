const prompt = require('prompt-sync')();


function totalInput(input, times, sum = 0) {


    if (times > 0) {
        return totalInput(input, times - 1, sum + input)
    }

    return sum;
};

module.exports = totalInput;

console.log(totalInput(5, 10));