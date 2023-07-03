// |Key| Symbols|
// |------|-----------|
// |1| .,?!:|
// |2| ABC|
// |3| DEF|
// |4 |GHI|
// |5 |JKL|
// |6| MNO|
// |7| PQRS|
// |8| TUV|
// |9| WXYZ|
// |0| space|


const prompt = require("prompt-sync")();
const dictionary = {
    ".":"1",
    ",":"11",
    "?":"111",
    "!":"1111",
    ":":"11111",
    "a":"2",
    "b":"22",
    "c":"222",
    "d":"3",
    "e":"33",
    "f":"333",
    "g":"4",
    "h":"44",
    "i":"444",
    "j":"5",
    "k":"55",
    "l":"555",
    "m":"6",
    "n":"66",
    "o":"666",
    "p":"7",
    "q":"77",
    "r":"777",
    "s":"7777",
    "t":"8",
    "u":"88",
    "v":"888",
    "w":"9",
    "x":"99",
    "y":"999",
    "z":"9999",
    " ":"0"
}
const string = "Hello, World!";
function textMessage(d,s){
    const result = [];
    const newString = s.toLowerCase();
    for(i=0 ; i < newString.length;i++ ){
        const number = d[newString[i]];
        result.push(number);
    }

    return result.join("");

}

console.log(textMessage(dictionary,string));