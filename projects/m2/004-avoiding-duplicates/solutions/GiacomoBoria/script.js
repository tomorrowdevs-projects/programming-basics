/*In this exercise, you will create a program that reads words from the user until the user enters a blank line. After the user enters a blank line your program should dis- play each word entered by the user exactly once. The words should be displayed in the same order that they were first entered.

For example, if the user enters: first second first third second

then your program should display: first second third*/

function getArrayWords() {
  
    let userInput;
    const phrasesUser = [];
  
    while (userInput !== "") {
    
    userInput = prompt("Type the word you want to memorize.\nLeave a blank line to exit the program")
    phrasesUser.push(userInput);
    
    }
    phrasesUser.pop(userInput) // Use the pop method to exclude "" which in this case returns as the blank;
    return phrasesUser;
  }
  
  function eliminateDuplicate(array) {
    
    const newArray = [...new Set(array)];
  
    return newArray.join(", ");
  }
  
  const wordsInput = getArrayWords();
  
  alert(eliminateDuplicate(wordsInput));