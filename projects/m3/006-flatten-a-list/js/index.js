const nestedArray = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];

function getFlattenArray (array) {
// If the arguments of the fucntion is an array and it's empty return the array.
    if (Array.isArray(array) && array.length == 0 ) return array;

// Declaring two conditions as the track said.
    if (Array.isArray(array[0])){

        let l1 = getFlattenArray(array[0]).concat(getFlattenArray(array.slice(1)));
        return l1;
    };

    if (!Array.isArray(array[0])) {

        l2 = [array[0]].concat(getFlattenArray(array.slice(1)))
        return l2;
    };

};

console.log(getFlattenArray(nestedArray));