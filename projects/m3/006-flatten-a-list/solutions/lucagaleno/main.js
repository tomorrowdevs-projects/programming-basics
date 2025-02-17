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

const testArray1 =  [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]
const testArray2 = [1, 2, 3, 4, 5]
const testArray3 = ["a", ["b", "c"], ["d", ["e", ["f", "g"]]], [[["h"], "i"], ["l"]]]
const testArray4 = ["one", ["two", "three"], ["four", ["five", ["six", "seven"]]], [[["eight"], "nine"], ["ten"]]]

//four methods to faltting a array with different arrays
const flatArray1 = [].concat.apply([],testArray1)
const flatArray2 = [].concat(...testArray2)
const flatArray3 = [].concat.apply([],testArray3)
const flatArray4 = [].concat(...testArray4)

console.log (`test1 ${flatArray1}`)
console.log (`test2 ${flatArray2}`)
console.log (`test3 ${flatArray3}`)
console.log (`test4 ${flatArray4}`)



//recursive function to flat an array (with two funcitons in a "waterfall" methods)
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

console.log (`test5 ${flattenArray(testArray1)}`)

//recursive function following the exe description

function flatArray (data){

    let L1 = [];
    let L2 = [];

    if (data.length === 0) {
        return data;
    }

    if (Array.isArray(data[0])){
        L1 = flatArray(data[0])
        L2 = flatArray(data.splice(1))
        return L1.concat(L2)
    }
    if (!(Array.isArray(data[0]))){
        L1 = [data[0]]
        L2 = flatArray(data.splice(1))
        return L1.concat(L2)
    }
}

console.log (`test6 ${flatArray(testArray1)}`)

