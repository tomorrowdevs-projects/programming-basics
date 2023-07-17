// # What Color Is That Square?

// Positions on a chess board are identified by a letter and a number.  
// The letter identifies the column, while the number identifies the row, as shown below:

// <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Chess-board-with-letters_nevit_111.svg" />

// Write a program that reads a position from the user.  
// Use an if statement to determine **if the column begins with a black square or a white square**.  
// Then use modular arithmetic to report the color of the square in that row. 
// Your program may assume that a valid position will always be entered. 
// It does not need to perform any error checking.

// Example:  
// Input =  a1  
// Output = black

// Input = d5  
// Output = white  

// # Di che colore è quel quadrato?

// Le posizioni su una scacchiera sono identificate da una lettera e da un numero.
// La lettera identifica la colonna, mentre il numero identifica la riga, come mostrato di seguito:

// <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Chess-board-with-letters_nevit_111.svg" />

// Scrivere un programma che legga una posizione dall'utente.
// Utilizza un'istruzione if per determinare **se la colonna inizia con un quadrato nero o bianco**.
// Quindi usa l'aritmetica modulare per riportare il colore del quadrato in quella riga.
// Il tuo programma potrebbe presumere che verrà sempre inserita una posizione valida.
// Non è necessario eseguire alcun controllo degli errori.

// Esempio:
// Ingresso = a1
// Uscita = nero

// Ingresso = d5
// Uscita = bianco

let square = prompt(`You insert the letter of the square: `).toUpperCase();
let numbers = prompt(`You insert the number of the square: `);

let whiteColor = "white";
let blackColor = "black";

const whiteSquare = ["A2","A4","A6","A8","B1","B3","B5","B7","C2","C4","C6","C8","D1","D3","D5","D7","E2","E4","E6","E8"];
const blackSquare = ["A1","A3","A5","A7","B2","B4","B6","B8","C1","C3","C5","C7","D2","D4","D6","D8","E1","E3","E5","E7"];
console.log(whiteSquare)
console.log(blackSquare)

let sumOfTheInputs = square + numbers;
console.log(sumOfTheInputs)
console.log(typeof sumOfTheInputs);

for(let i = 0; i <=whiteSquare.length && blackSquare.length; i++){
    if(sumOfTheInputs != whiteSquare[i] && ! blackSquare[i]){
        alert(`you entered invalid parameters`);
        break;
    } else if(sumOfTheInputs == whiteSquare[i]){
        alert(`you entered position ${whiteSquare[i]} and your square is ${whiteColor}`);
        break;
    } else if(sumOfTheInputs == blackSquare[i]){
        alert(`you entered position ${blackSquare[i]} and your square is ${blackColor}`);
        break;
    }
}