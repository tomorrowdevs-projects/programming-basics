// # Fizz-Buzz

// Fizz-Buzz is a game that is sometimes played by children to help them learn about division. 
// The players are commonly arranged in a circle so that the game can progress from player to player continually. 
// The starting player begins by saying one, and then play passes to the player to the left. 
// Each subsequent player is responsible for the next integer in sequence before play passes to the following player. 

// On a player’s
// turn they must either say their number or one of following substitutions:
// - If the player’s number is divisible by 3 then the player says fizz instead of their number.
// - If the player’s number is divisible by 5 then the player says buzz instead of their number.

// A player must say both fizz and buzz for numbers that are divisible by both 3 and 5. 
// Any player that fails to perform the correct substitution or hesitates before answering is eliminated from the game. 
// The last player remaining is the winner.
// Write a program that displays the answers for the first 100 numbers in the Fizz- Buzz game. Each answer should be displayed on its own line.

// # Fizz-Buzz

// Fizz-Buzz è un gioco che a volte viene giocato dai bambini per aiutarli a conoscere la divisione.
// I giocatori sono comunemente disposti in cerchio in modo che il gioco possa progredire continuamente da giocatore a giocatore.
// Il primo giocatore inizia dicendo uno, e poi il gioco passa al giocatore alla sinistra.
// Ogni giocatore successivo è responsabile del numero intero successivo in sequenza prima che il gioco passi al giocatore successivo.

// Su un giocatore
// a turno devono pronunciare il loro numero o una delle seguenti sostituzioni:
// - Se il numero del giocatore è divisibile per 3, il giocatore dice fizz invece del proprio numero.
// - Se il numero del giocatore è divisibile per 5, il giocatore dice buzz invece del proprio numero.

// Un giocatore deve pronunciare sia fizz che buzz per i numeri divisibili sia per 3 che per 5.
// Qualsiasi giocatore che non esegue la sostituzione corretta o esita prima di rispondere viene eliminato dal gioco.
// L'ultimo giocatore rimasto è il vincitore.
// Scrivi un programma che visualizzi le risposte per i primi 100 numeri nel gioco Fizz-Buzz. Ogni risposta dovrebbe essere visualizzata su una propria riga.

let message = "";
let i;

for(i = 0 ; i <= 100 ; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        message = "FizzBuzz";
        console.log(message)
    } else if( i % 5 == 0){
        message = "Buzz";
        console.log(message);
    } else if(i % 3 == 0 ){
        message = "Fizz";
        console.log(message);
    }    
        else{
            console.log(i)
        }
}