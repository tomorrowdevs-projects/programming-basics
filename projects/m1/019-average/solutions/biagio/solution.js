const prompt = require('prompt-sync')();

function average() {
    let allNumber = []
    let number;
    let total = 0;
    while (number != 0) {
        number = parseInt(prompt("Insert a valid number or stop with 0: "))
        let addNumber = allNumber.push(number)
    }
    for (num of allNumber) {
        total += num
        average = total / (allNumber.length - 1)
    }
    console.log(`The average is ${Math.floor(average)}`)

}

average()