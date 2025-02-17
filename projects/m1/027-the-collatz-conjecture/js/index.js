function collatz(userNumber) {
let combination=`${userNumber}`;

while (userNumber !==1){
if (userNumber % 2 === 0) {
    userNumber = userNumber / 2;
    combination += "," + userNumber;
    condition = true;
} else if (userNumber % 2 !== 0) {
   userNumber = (userNumber * 3) + 1;
    combination += ","+userNumber;
    
}
}
console.log(combination)
}

let userNumber=parseInt(prompt("Inserisci un numero intero"));
while (userNumber > 0) {
    collatz(userNumber);
    userNumber = parseInt(prompt("Inserisci un altro numero intero"));
}

