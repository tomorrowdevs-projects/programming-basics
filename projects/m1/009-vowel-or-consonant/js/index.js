// In this exercise you will create a program that reads a letter of the alphabet from the user.   
// If the user enters **a, e, i, o or u** then your program should display a message 
// indicating that the entered letter is a **vowel**.  
// If the user enters **y** then your program should display a message 
// indicating that **sometimes y is a vowel, and sometimes y is a consonant**.   
// Otherwise, your program should display a message indicating that **the letter is a consonant**.

// In questo esercizio creerai un programma che legge una lettera dell'alfabeto dall'utente.
// Se l'utente inserisce **a, e, i, o o u**, il programma dovrebbe visualizzare un messaggio
// indica che la lettera inserita è una **vocale**.
// Se l'utente inserisce **y**, il programma dovrebbe visualizzare un messaggio
// indica che **a volte y è una vocale, e a volte y è una consonante**.
// Altrimenti, il tuo programma dovrebbe visualizzare un messaggio che indica che **la lettera è una consonante**.

// let userInput = prompt(`You insert the letter: `);


let vowels = ['a','e','i','o','u'];
let doubleLetter = 'y';
function user(userInput){
for(let i= 0; i <= vowels.length; i++){
    if(userInput === vowels[i]){
        alert(`You chose the letter: ${userInput}`);
        break;
    } else if(userInput != vowels[i] && userInput != doubleLetter){
        alert(`You chose the letter: ${userInput}`);
        break;
    }
}
if(userInput == doubleLetter ){
    alert(`You chose the letter: ${userInput} and sometimes y is a vowel, and sometimes y is a consonant`)
 }
};
user(prompt(`you insert the letter: `));