//006-flatten-a-list
/*
If data is empty then Return the empty list
If the first element in data is a list then
    Set l1 to the result of flattening the first element in data
    Set l2 to the result of flattening all of the elements in data, except the first
    Return the concatenation of l1 and l2
If the first element in data is not a list then
    Set l1 to a list containing only the first element in data
    Set l2 to the result of flattening all of the elements in data, except the first 
    Return the concatenation of l1 and l2

    https://flexiple.com/javascript/flatten-array-javascript/
    https://www.freecodecamp.org/news/flatten-array-recursion/
*/

//fastest method to flat an array

testArray1 =  [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]
testArray2 = [1, 2, 3, 4, 5]
testArray3 = ["a", ["b", "c"], ["d", ["e", ["f", "g"]]], [[["h"], "i"], ["l"]]]
testArray4 = ["one", ["two", "three"], ["four", ["five", ["six", "seven"]]], [[["eight"], "nine"], ["ten"]]]

let flatArray1 = [].concat.apply([],testArray1)

let flatArray2 = [].concat(...testArray2)

let flatArray3 = [].concat.apply([],testArray3)

let flatArray4 = [].concat(...testArray4)


console.log (`test1 ${flatArray1[3]}`)
console.log (`test2 ${flatArray2[3]}`)
console.log (`test2 ${flatArray3[3]}`)
console.log (`test2 ${flatArray4[3]}`)

function flattenArray(data){

    let outputArray = [];
    recursion(0, data, outputArray);
    return outputArray;   
    
}

function recursion(index, data, outputArray){

    if(index >= data.length){
        return;
    }
    if (Array.isArray(data[index])){
        recursion(0, data[index], outputArray);
    }else {
        outputArray.push(data[index]);
    }
    recursion(index + 1, data, outputArray);
}

console.log (`test4 ${flattenArray(testArray1)}`)


