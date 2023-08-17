// # Admission Price

// A particular zoo determines the price of admission based on the age of the guest.   
// - Guests 2 years of age and less are admitted without charge. 
// - Children between 3 and 12 years of age cost $14.00.
// - Seniors aged 65 years and over cost $18.00. 
// - Admission for all other guests is $23.00.  

// Create a program that begins by **reading the ages of all the guests in a group from the user**, 
// with one age entered on each line.   
// The user will enter a **blank lin**e (a newline character) to indicate that there are no more guests in the group.    
// Then your program should display the admission cost for the group with an appropriate message.   
// The cost should be displayed using **two decimal places**.

// # Prezzo d'ingresso

// Uno zoo particolare determina il prezzo dell'ingresso in base all'età dell'ospite.
// - Gli ospiti di età pari o inferiore a 2 anni sono ammessi gratuitamente.
// - I bambini dai 3 ai 12 anni costano $ 14,00.
// - Gli anziani di età pari o superiore a 65 anni costano $ 18,00.
// - L'ingresso per tutti gli altri ospiti è di $ 23,00.

// Crea un programma che inizia **leggendo dall'utente le età di tutti gli ospiti di un gruppo**,
// con un'età inserita in ogni riga.
// L'utente inserirà una **riga vuota**e (un carattere di nuova riga) per indicare che non ci sono più ospiti nel gruppo.
// Quindi il tuo programma dovrebbe visualizzare il costo di ammissione per il gruppo con un messaggio appropriato.
// Il costo deve essere visualizzato utilizzando **due cifre decimali**.

// const family = {}

// for(let person = 0; person < 100 ; person++){
//     family[person]= +prompt(`Add your family member's age`);
//     if(family[person] == ""){
//       delete family[person]
//         break;
//     }
// };
// console.log(family);
// console.log(typeof family.person)


// let pay;
// let sumOfTheFamily = []
// for(let person in family){
   // if(family[person] >= 3 && family[person] <= 12 ){
   //    pay = 14;
   //    sumOfTheFamily.push(pay);
   // } else if (family[person] >= 65){
   //    pay = 18;
   //    sumOfTheFamily.push(pay);
   // } else if( family[person] <= 2){
   //    pay = 0
   //    sumOfTheFamily.push(pay);
   // } else{
   //    pay = 23
   //    sumOfTheFamily.push(pay);
   // }
// }
// console.log(typeof pay)
// console.log(sumOfTheFamily);
// console.log(typeof sumOfTheFamily[0])
// let sum = 0
// for(let i = 0 ; i <= sumOfTheFamily.length; i++){
//    sum += sumOfTheFamily[i]
// };
// console.log(sum)
// alert(`the family paid: ${sum}`);


let pay = 0;
let ageFamily = +prompt(`Add your family member's ageeeee`);

while(ageFamily != ''){

    if (ageFamily >=3 && ageFamily <= 12) { 
        pay+= 14;
    } else if (ageFamily > 12 && ageFamily < 65) {
        pay+= 23;
    } else if (ageFamily >= 65) {
        pay+= 18;
    } 

    ageFamily = +prompt(`Add your family member's age`);
    

}



alert(`the family paid: ${pay}`);