const prompt = require ("prompt-sync")()

function sumValue () {
    const value = parseInt(prompt('Insert a value to sum: '))
    if (isNaN(value)){
        return 0.0
    } else{
        return parseInt(value) + sumValue()
    }

}

console.log(sumValue())