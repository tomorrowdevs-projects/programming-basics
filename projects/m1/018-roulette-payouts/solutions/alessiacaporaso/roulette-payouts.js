// roulette has 38 spaces: 18 black, 18 red and 2 green
// gren = 0 and 00
// rad = 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34 and 36. 
// other number between1 and 36 are black

// display random number
let randomNumber;
for(let number = 0; number <= 37; number++){
  randomNumber = Math.floor(Math.random() * number);
}
if(randomNumber === 37){
  randomNumber = "00";
}
// divide number for color
let colorSpace;
switch(randomNumber){
  case '00':
  case 0:
    colorSpace = 'Green';
    break;
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
    colorSpace = 'Red';
    break;
  default:
    colorSpace = 'Black'
}
// odd/even number
let type;
if(randomNumber % 2 === 0){
  type = 'Even';
} else if(randomNumber % 2 !== 0){
  type = 'Odd';
}
// range number
let rangeNumber;
if(randomNumber >= 1 && randomNumber <= 18){
  rangeNumber = "1 to 18"
} else if(randomNumber >= 19 && randomNumber <= 36){
  rangeNumber = "19 to 36"
}
if(randomNumber === 0 || randomNumber === '00'){
  alert(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay ${colorSpace}`)
} else {
  alert(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay ${colorSpace}\nPay ${type}\nPay ${rangeNumber}`)
}