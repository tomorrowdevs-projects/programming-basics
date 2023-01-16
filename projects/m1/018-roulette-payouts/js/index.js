const listNumberRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36, 37];
const randomNumber = Math.round(Math.random() * 37);

let alertMessage = "";

if(randomNumber == 0){
  alertMessage += "The spin resulted in 0...\n";
  alertMessage += "Pay 0";
} else if(randomNumber == 37){
  alertMessage += "The spin resulted in 00...\n";
  alertMessage += "Pay 00";
} else {
  
  alertMessage += "The spin resulted in " + randomNumber + "...\n";
  alertMessage += "Pay " + randomNumber + "\n";
  
  if(listNumberRed.includes(randomNumber)){
    alertMessage += "Pay Red \n";
  } else {
    alertMessage += "Pay Black \n";
  }
  
  if(randomNumber % 2 == 0){
    alertMessage += "Pay Even \n";
  } else {
    alertMessage += "Pay Odd \n";
  }
  
  if(randomNumber <= 18){
    alertMessage += "Pay 1 to 18";
  } else {
    alertMessage += "Pay 19 to 36";
  }
}

alert(alertMessage);
