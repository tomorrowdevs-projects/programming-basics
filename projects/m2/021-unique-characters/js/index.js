const string1 = "Hello, Word!"
const string2 = "lllll"


function countLetter(s){

    const count = [];
    for(i=0;i<s.length;i++){
        if(!count.includes(s[i])){
            count.push(s[i])
        }
    }
    return `The number of characters are: ${count.length}`

}

console.log(countLetter(string1))
console.log(countLetter(string2))