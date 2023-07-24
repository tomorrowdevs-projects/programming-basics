// # The Collatz Conjecture

// Consider a sequence of integers that is constructed in the following manner:

// Start with any positive integer as the only term in the sequence
//     **While** the last term in the sequence is not equal to 1 **do**
//         **If** the last term is even **then**
//             Add another term to the sequence by dividing the last term by 2 using floor division
//         **Else**
//             Add another term to the sequence by multiplying the last term by 3 and adding 1

// The Collatz conjecture states that this sequence will eventually end with one when it begins with any positive integer. 
// Although this conjecture has never been proved, it appears to be true.
// Create a program that reads an integer, n, from the user and reports all of the values in the sequence starting with n and ending with one. 
// Your program should allow the user to continue entering new n values (and your program should continue displaying the sequences) until the user enters a value for n that is less than or equal to zero.

// *The Collatz conjecture is an example of an open problem in mathematics. While many people have tried to prove that it is true, no one has been able to do so. Information on other open problems in mathematics can be found on the Internet.*

// # La congettura di Collatz

// Consideriamo una sequenza di numeri interi costruita nel modo seguente:

// Inizia con qualsiasi numero intero positivo come unico termine nella sequenza
// **While** l'ultimo termine nella sequenza non è uguale a 1 **do**
// **Se** l'ultimo termine è pari **allora**
// Aggiungi un altro termine alla sequenza dividendo l'ultimo termine per 2 usando la divisione floor
//         **Altro**
// Aggiungi un altro termine alla sequenza moltiplicando l'ultimo termine per 3 e aggiungendo 1

// La congettura di Collatz afferma che questa sequenza alla fine finirà con uno quando inizia con qualsiasi numero intero positivo.
// Sebbene questa congettura non sia mai stata dimostrata, sembra essere vera.
// Crea un programma che legge un numero intero, n, dall'utente e riporta tutti i valori nella sequenza che inizia con n e finisce con uno.
// Il tuo programma dovrebbe consentire all'utente di continuare a inserire nuovi valori n (e il tuo programma dovrebbe continuare a visualizzare le sequenze) finché l'utente non inserisce un valore per n minore o uguale a zero.

// *La congettura di Collatz è un esempio di problema aperto in matematica. Mentre molte persone hanno provato a dimostrare che è vero, nessuno è stato in grado di farlo. Informazioni su altri problemi aperti in matematica si possono trovare su Internet.*

let userInput = +prompt(`Enter the number, if you insert the number less or than 1, you'll exit the program`);

const NUMBERARRAY = [];
NUMBERARRAY.push(userInput);

while(userInput > 1){
   
     if(userInput %2 == 0){
        userInput = Math.floor(userInput / 2)
     } else{
        userInput = Math.floor((userInput * 3) + 1)
     }
     NUMBERARRAY.push(userInput);
}

console.log(NUMBERARRAY)

