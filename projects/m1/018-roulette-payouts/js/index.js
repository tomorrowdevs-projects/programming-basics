//018-roulette payouts
//rossi sono numerati 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 e 36
let odd_even;
let subset;
let casNum=confirm('Hit the okay key to try your luck');

//algoritmo che sceglie un numero casuale
casNum=Math.floor(Math.random() *(0 + 37 ));

//inserisco la stringa '00' come sostituto di 37
if (casNum===37) {
  casNum='00';
}

//definisco se il numero è pari o dispari
if (casNum%2===0) {
  odd_even='Pay Even';

} else {
    odd_even='Pay Odd';
  
}

//definisco appartenenza gruppo numerico
if (casNum>=1 && casNum<=18) {
  subset='Pay 1 to 18';
  
} else {
    subset='Pay 19 to 36';
  
}


//unisco le varie condizioni e restituisco l'output
switch (casNum) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
  case 12:
  case 14:
  case 16:
  case 18:
  case 19:
  case 21:
  case 23:
  case 25:
  case 27:
  case 30:
  case 32:
  case 34:
  case 36:
    
    alert(`The spin resulted is ${casNum}
Pay ${casNum}
Pay RED
${odd_even}
${subset}`);

break;
  case 2:
  case 4:
  case 6:
  case 8:
  case 10:
  case 11:
  case 13:
  case 15:
  case 17:
  case 20:
  case 22:
  case 24:
  case 26:
  case 28:
  case 31:
  case 33:
  case 35:
    
    alert(`The spin resulted is ${casNum}
Pay ${casNum}
Pay BLACK
${odd_even}
${subset}`);
   

break;
  case 0:
    alert(`The spin resulted is ${casNum}
Pay 0`);

break;
  case '00':
    alert(`The spin resulted is ${casNum}
Pay 00`);
    


}

