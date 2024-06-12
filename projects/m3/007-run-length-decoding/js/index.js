const list = ["A",12,"B",4,"A",6,"B",1]; //result = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"];

function decodeList (list, newList = []) {
// When the second element in an encoded list is a number, push the first element of the array in a new array, and decrease the number by 1. Then return the function with the decreased number,  to simulate the decoding.
    if (!isNaN(list[1]) && list[1] > 0){
        const l1 = [list[0], list[1] - 1];
        newList.push(list[0]);
        return decodeList(l1.concat(list.slice(2)), newList);
    };
 
// When the second element in an array is a number and it's equal to 0, the recursion slices from the array the first two  elements, simulating the end of the decoding fot that specific item.
    if (list[1] === 0) {
        return decodeList(list.slice(2), newList)
    }

// If there are no more element in the list, we return the new decoded list.
    if (list.length === 0) {
        return newList;
    };

};

console.log(decodeList(list));
