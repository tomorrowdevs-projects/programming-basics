const encoding = function (array) {
    const counter = {};
    const encodingHelper = function (array) {
        //base case
        if (array.length === 0) return;
        // if the key exist, increment the value otherwise create the key [frequency counter pattern]
        counter[array[0]] ? counter[array[0]] += 1 : counter[array[0]] = 1;
        encodingHelper(array.slice(1));
    }
    encodingHelper(array)
    // transform the object to an array
    const result = Object.entries(counter).flat(1);
    return result;

}

const test1 = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "A", "A", "A", "A", "A", "A", "B"];
const test2 = ["A", "B", "C", "Z", "Z", "A", "Z"];
const test3 = "hello";
console.log(encoding(test1));
console.log(encoding(test2));
console.log(encoding(test3))
