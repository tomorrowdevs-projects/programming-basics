// Get a random number between 0 and 37 (included)
let rouletteResult = parseInt(Math.floor(Math.random() * 38));
const redSpaces = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let result37 = "";

//message to display result
let messageResult = 
  "The spin resulted in " + rouletteResult + "...\n" + 
  "Pay " + rouletteResult + "\n";
  ;

//convert 37 in 00
if (rouletteResult == 37){
  result37 = "00";
  messageResult = 
  "The spin resulted in " + result37 + "...\n" + 
  "Pay " + result37 + "\n";
}

//add color to the message
if(rouletteResult == 37){
  messageResult += "Pay Green \n";
}else if(rouletteResult == 0){
  messageResult += "Pay Green \n";
}else if(redSpaces.includes(rouletteResult)){
  messageResult += "Pay Red \n";
}else{
  messageResult += "Pay Black \n";
}

//add Odd VS Even
if(rouletteResult % 2 == 0){
  messageResult += "Pay Even \n";
} else {
  messageResult += "Pay Odd \n";
}

//add ≤ or > "18"
if (rouletteResult > 0 && rouletteResult <= 18){
  messageResult += "Pay 1 to 18";
} else if(rouletteResult > 18 && rouletteResult < 37){
  messageResult += "Pay 19 to 36";
} else if(rouletteResult == 0){
  messageResult += "Pay 0";
} else {
  messageResult += "Pay 00";
}

//Display result message
alert(messageResult);