const prompt = require("prompt-sync")();
const list = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"];

function getList () {

    const list = [];

    console.log(`--- Run-Length Encoding ----  \nInsert a string, element by element to see it's encoded version.`);
    let input = `.`;

    const onlyLetters = /^[a-zA-Z]+$/;

// Declaring a while loop to create an array of elements for the encoding, by using a regex to test the user's input and push it to an array.
        while (input !== "") {
            
            input = prompt(`Please, enter an item for your list (leave empty to stop):`)

            if (onlyLetters.test(input)){
                list.push(input.toUpperCase());
            } else {
                console.log("Please, enter a string type of input.")
                continue;
            };
        };

    return list;
};

function encodeList (list, counter = 0) {
// Setting up base case, when function is on last item on list, we push counter to  the list and return it.
    if ((list.length === 1)) {
        list.push(counter + 1);
        return list;
    };

// If two consecutive elements are equal, we slice the second from the list and add 1 to the counter.
    if (list[0] === list[1]) {
        return encodeList(list.slice(1), counter += 1);
    };

//  When two near elements in the list are different we push the counter in the list and recursively recall it on the next item.
    if (list[0] !== list[1]){
        let l1 = encodeList([list[0]], counter);
        let l2 = encodeList(list.slice(1));
        return l1.concat(l2);
    };

    return list;

};

console.log(encodeList(getList ()));