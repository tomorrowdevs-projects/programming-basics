let wordUser = "";
let listWordsUser = [];

do{
    wordUser = prompt("Enter a word. To finish enter a blank space");
    if(!listWordsUser.includes(wordUser) && wordUser != " "){
        listWordsUser.push(wordUser);
    }
}while(wordUser != " ");


console.log(listWordsUser);