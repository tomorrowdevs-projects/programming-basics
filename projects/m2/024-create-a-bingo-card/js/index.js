const bingoNumbers = {
    "B": [1, 15],
    "I": [16, 30],
    "N": [31, 45],
    "G": [46, 60],
    "O": [61, 75],
}


function playBingo(obj) {
    const dictionary = {
        "B": [],
        "I": [],
        "N": [],
        "G": [],
        "O": [],
    };
    
    for (value in obj) {
        let min = obj[value][0]
        let max = obj[value][1]
        let interval = max - min + 1;
        for (let i = 0; i < 5; i++) {
            let randomNumObj = Math.floor(Math.random() * interval) + min
            dictionary[value].push(randomNumObj);
        }
    }
   return dictionary
}
   


console.log(playBingo(bingoNumbers)) 