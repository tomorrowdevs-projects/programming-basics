// 1. create a function that takes parameters from an array and return them in a different format (a. 2. create an input 3. use the function with that input

//trying creating a way to format the list
function formattingList(array) {
    arrayOne = array.slice(0,-1);
    console.log(arrayOne);
    arrayTwo = array.slice(-1);
    console.log(arrayTwo)
    stringOne = arrayOne.join(", ");
    console.log(stringOne);
    
    result = stringOne + " and " + arrayTwo[0];
    return result;
}

// declaring the list and adding the input elements to it
const list = [];
let newList;
list[0] = prompt ('What do you need?');
for (i = 1; i < Infinity; i++) {
    item = prompt ('Still something?')
    list.push(item)
    if (list[i] == "" || list[i] == 'no') {
        list.pop(item)
        console.log(list)
        break
    }
}

alert(formattingList(list))