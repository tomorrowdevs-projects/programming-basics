let num = parseInt(prompt("Enter a decimal number: "));
let result = "";

while (num > 0) {
  let binary = num % 2;//ottengo il resto della divisione di 'num'
  result = binary.toString() + result;//che poi viene trasformato in stringa, poi sommato e salvato nella variabile 'result' contenente una stringa vuota 
  num = Math.floor(num / 2);//viene espressa la condizione del loop finche il numero diviso non da risultato zero e interrompe il loop
  
}

console.log("Binary number: " + result);
