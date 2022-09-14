let factor = 2;
let arrFactor = [];
let thisInt;


while(true){
  let userInt = parseInt(prompt('Enter an integer(2 or greater):'));

  let correctInt = /^[0-9]+$/.test(userInt);

   if(correctInt && userInt >= 2){
    
  thisInt = userInt;

  while(thisInt !== 1){
    if(thisInt % factor == 0){
      arrFactor.push(factor);
      thisInt = thisInt / factor;
    }else {
      factor = factor + 1 ;
    }
  }
  alert(`The prime factors of ${userInt} are: ${arrFactor.join(" ")}`);
  
}else{
  alert('Error! Enter a positive integer greater than or equal to 2');
  continue;
}
break;
}