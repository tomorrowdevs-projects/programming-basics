function runLength(array) {
    if (array.length === 0) {
        return [];
    }

    let count = 1;
    let data = array[0];

    while (count < array.length && array[count] === data) {
        count++;
    }

    const newArray = [data, count];

    const remainingArray = array.slice(count);
    return newArray.concat(runLength(remainingArray));
}

const arrayTest = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "A", "A", "A", "A", "A", "A", "B"];
console.log(runLength(arrayTest));
