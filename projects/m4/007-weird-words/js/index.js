const fs = require("fs/promises")

function weirdWords(file) {
    fs.readFile(file, 'utf-8')
        .then(data => {
            data = lineToArray(data, "\n")
            const list1 = []
            const list2 = []
            for (let i = 0; i < data.length; i++) {
                for (let c = 0; c < data[i].length; c++) {
                    const char = data[i][c]
                    if (data[i].includes('i')) {
                        if (char === 'i' && data[i][c + 1] === 'e' && data[i][c - 1] === 'c') {
                            list1.push(data[i])
                        } else if (char === 'i' && data[i][c - 1] === 'e') {
                            list2.push(data[i])
                        } else if (char === 'i' && data[i][c + 1] === 'e') {
                            list1.push(data[i])
                        }
                    }
                }
            }
            console.log(`Words that follow the rule (list1):`);
            console.log(list1);
            console.log(`Number of words in list1: ${list1.length}`);

            console.log(`Words that violate the rule (list2):`);
            console.log(list2);
            console.log(`Number of words in list2: ${list2.length}`);

        })
        .catch(e => {
            console.log('' + e)
        })
}

function lineToArray(data, delimiter) {
    return data.split(delimiter)
}


const file1 = 'file.txt'
weirdWords(file1)
