const prompt = require("prompt-sync")();

const string = prompt("insert string: ");

const array = [];

for (i=0; i<string.length;i++){
    let toArray = array.push(string[i]);
}

const newArray = array.reverse().join("")

if (newArray === string){
    console.log(string + " is Palindrome");
}else{
    console.log(string + " is not Palindrome");
}