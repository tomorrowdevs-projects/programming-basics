let userPosition = prompt('enter your position in the board indicating first the letter and then the number').toLowerCase();

let correctPosition = /^[a-h][1-8]$/.test(userPosition);

let userLetter;
let userNumber;

if(correctPosition){
  userLetter = userPosition[0];
  userNumber = userPosition[1];
}else{
  alert('Error! Enter the correct position');
}

switch(userLetter){
  case 'a':
  case 'c':
  case 'e':
  case 'g':
    if (userNumber % 2 == 0){
      alert(`The color of the square ${userPosition} is withe`)
    }else{
      alert(`The color of the square ${userPosition} is black`)
    }
  break;

  case 'b':
  case 'd':
  case 'f':
  case 'h':
    if(userNumber % 2 !=0 ){
      alert(`The color of the square ${userPosition} is withe`)
    }else{
      alert(`The color of the square ${userPosition} is black`)
    }
}
