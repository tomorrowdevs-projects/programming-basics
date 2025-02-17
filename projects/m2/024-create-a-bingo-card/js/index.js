const number = {
    "B": [1, 15],
    "I": [16, 30],
    "N": [31, 45],
    "G": [46, 60],
    "O": [61, 75],
}


function bingo(n) {
    const d = {
        "B": [],
        "I": [],
        "N": [],
        "G": [],
        "O": [],
    };
    const array = [];
    for (k in n) {
        let min = n[k][0]
        let max = n[k][1]
        let range = max - min + 1;
        for (card = 0; card < 5; card++) {
            let random = Math.floor(Math.random() * range) + min
            d[k].push(random)
        }
    }
    return d
}

console.log(bingo(number))