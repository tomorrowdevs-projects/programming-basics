function runLengthDecoding (array){
    const newArray = []
    const count = 0
    if (array.length === 0 ){
        return []
    }

    let data = array[0]

    for (let i = 0; i < array[1]; i++){
        newArray.push(array[0])

    }

    const remainingArray = array.slice(count+2)

    return newArray.concat(runLengthDecoding(remainingArray))
}
const arrayTest = ["A",12,"B",4,"A",6,"B",1]
console.log(runLengthDecoding(arrayTest))