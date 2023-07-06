const points = {
    1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: "K",
    8: ["J", "X"],
    10: ["Q", "Z"]
}

const string = "hello"


function scrabblePoint(p, s) {
    let score = 0
    for (i = 0; i < s.length; i++) {
        const upper = s[i].toUpperCase()
        for (k in p) {
            if(p[k].includes(upper)){
                score += Number(k);
            }
        }
    }

    return `The score for the word ${s} is ${score}`

}

console.log(scrabblePoint(points, "hello"))
console.log(scrabblePoint(points, "cento"))