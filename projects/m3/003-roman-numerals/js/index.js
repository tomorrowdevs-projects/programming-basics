const number = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
}


function convertNumber(s, d, count = 0) {
    const length = s.length
    if (length >= 2 && d[s[0]] < d[s[1]]) {
        count -= d[s[0]]
        sToArray = s.split("").reverse()
        sToArray.pop()
        const newString = sToArray.reverse().join("")
        return convertNumber(newString, d, count)
    } else {
        if (length > 0) {
            count += d[s[0]]
            sToArray = s.split("").reverse()
            sToArray.pop()
            const newString = sToArray.reverse().join("")
            return convertNumber(newString, d, count)
        }
        return `The Roman number ${s} is ${count}`
    }
}

const string = "MDCI"
console.log(convertNumber(string, number))

const string2 = "IX"
console.log(convertNumber(string2, number))