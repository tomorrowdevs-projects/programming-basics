//019-average

//inserisco l'input con 'split' per separare ogni stringa
const userDigit = prompt('enter a collection of numbers to get the average (example 1 2 3 4) and at the end enter 0 (zero)').split('');
//creo la variabile che poi conterrà la somma dei numeri del prompt
let sumUD= 0;
//tramite il loop 'for' ho la possibilità di iterare per quanti numeri vengono inseriti nel prompt 
for (let i = 0; i < userDigit.length; i++) {
  sumUD += +userDigit[i]; //sumUD assume il valore della somma di tutti i numeri iterati in userDigit
} 
//con if separo la condizione di 0 iniziale e finale e stampo l'output
if (userDigit[0]=== '0') {
  alert('Error,the first digit cannot be a zero(0)');

} else if (userDigit[userDigit.length -1]==='0') {
  alert(`The average is : ${sumUD / (userDigit.length -1)}`);
  
}else {
  alert(`The average is : ${sumUD / (userDigit.length)}`);
}