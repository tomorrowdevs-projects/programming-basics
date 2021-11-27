// Dichiaro la variabile e le assegno il valore inserito dall'utente
let letter = prompt("Insert a letter");

// Converto la lettera inserita dall'utente in lettera minuscola
letter = letter.toLowerCase();

/* Utilizzo una regular expression per controllare che la stringa inserita dall'utente contenga solo uno {1} dei caratteri definiti dal pattern (lettere alfabeto a-z).
La variabile associata assumerà un valore booleano (true or false) */
let onlyOneLetter = /^[a-z]{1}$/.test(letter);

if(onlyOneLetter) {
    switch(letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    alert("This letter is a vowel!");
    break;
    case "y":
    alert("Sometimes y is a vowel and sometimes is a consonant!");
    break;
    default:
    alert("This letter is a consonant!");
    } 
} else {
alert("This isn't a letter.");
}