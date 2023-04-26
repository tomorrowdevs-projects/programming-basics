let factor = 2;//si parte dal 2 perchè è il N.P. piu basso
let n = prompt('enter a number');//input utente
  while (factor <= n) {//se viene inserito un numero piu piccolo o uguale di 2 il loop si interrompe
    if (n % factor === 0) {//nel if vediamo se n è divisibile per factor
      console.log(factor);
      n = n / factor;//se n è divisibile viene diviso per factor 
    } else {
      factor++;//se n non è subito divisibile allora incrementiamo factor finche non genera un numero primo divisibile per n
    }
  }

