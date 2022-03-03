
const decoding = function (compressedArray, prevLetter) {
    const decodedArray = [];
    //base case
    if (compressedArray.length === 0) return decodedArray;

    // if the current value is a number, push prevLetter in the array and then decrease the number by one
    // if the number is different from 0, repeat
    if (typeof (compressedArray[0]) === "number") {
        decodedArray.push(prevLetter);
        compressedArray[0] -= 1;
        if (compressedArray[0] !== 0)
            return decodedArray.concat(decoding(compressedArray, prevLetter));
    }

    return decodedArray.concat(decoding(compressedArray.slice(1), compressedArray[0]));
}

const test1 = ["A", 12, "B", 4, "A", 6, "B", 1];
const test2 = ["A", 12, "H" , 20, "Z",2];
console.log(decoding(test1));
console.log(decoding(test2))