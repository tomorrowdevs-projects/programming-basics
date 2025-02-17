function rollDice() {
    const total = []
    const totalValue = {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
    }
    const probability = {
        2: "2,78 %",
        3: "5,56 %",
        4: "8,33 %",
        5: "11,11 %",
        6: "13,89 %",
        7: "16,67 %",
        8: "13,89 %",
        9: "11,11 %",
        10: "8,33 %",
        11: "5,56 %",
        12: "2,78 %",
    }


    for (i = 0; i < 1000; i++) {
        const firstDice = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        const secondDice = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        const sum = firstDice + secondDice;
        total.push(sum)
    }
    for (value = 0; value < total.length; value++) {
        const valueToCheck = total[value]
        totalValue[valueToCheck] += 1
    }
    const percentage = {}
    for (key in totalValue) {
        percentage[key] = (totalValue[key] / 1000 * 100).toFixed(2) + " % on " + probability[key] + " of probability"
    }

    return percentage
}

console.log(rollDice())