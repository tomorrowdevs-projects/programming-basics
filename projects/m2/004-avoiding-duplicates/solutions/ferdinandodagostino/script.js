// In this exercise, you will create a program that reads words from the user until the user enters a blank line. After the user enters a blank line your program should dis- play each word entered by the user exactly once. The words should be displayed in the same order that they were first entered.

// For example, if the user enters: first second first third second

// then your program should display: first second third

let userWord;
const wordArray = [];
while (userWord != '') {
  userWord = prompt('Inserisci una parola');
  if (userWord != '') {
    wordArray.push(userWord);
  }
}

//creo un set per eliminare i duplicati perchè il set non ne ammette, dopodichè lo ristrasformo in array
let findDuplicates = new Set(wordArray);
let setToArray = Array.from(findDuplicates);
console.log(setToArray);
