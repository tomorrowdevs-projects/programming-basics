let max = 0;
let numCount = 0;  //assegno ad entrambe le tre variabili un valore 0
let num = 0;
while (num < 100) {
  num = Math.round(Math.random() * 100);//genera numeri random,una volta raggiunto il numero 100 si interrompe il loop
  //console.log(num);
  if (num > max) {
    max = num; //verifica se max è maggiore di num e aggiorna il valore di max con quello di num 
    //console.log(max);
    numCount++; //memorizza ed incrementa il numero di volte in cui passa da un valore maggiore ad un'altro
  }

}

console.log(`The maximum value found was: ${max}`);
console.log(`The maximum value was updated: ${numCount} times`);

