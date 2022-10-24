// read the position from the user
const userPosition = prompt("Please, enter the position", "ex. a5").toLowerCase();
//divide letter and number for find the position
const letterPosition = userPosition.slice(0,1);
const numberPosition = userPosition.slice(1,2);
// determine if the column begin with a black square 
const calcColor = numberPosition % 2 === 0;
switch (letterPosition){
    case 'a':
    case 'c':
    case 'e':
    case 'g':
        if(calcColor){
        alert('The square is white')
        } else {
        alert('The square is black')
        } 
        break;
    case 'b':
    case 'd':
    case 'f':
    case 'h':
        if(calcColor){
        alert('The square is black')
        } else {
        alert('The square is white')
        }
        break
}
  
// if( letterPosition === 'a' || letterPosition === 'c' || letterPosition === 'e'|| letterPosition === 'g'){
//   //use modular arithmetic to report the color of the square in that row
//   if(calcColor){
//      alert('The square is white')
//   }  else {
//   alert('The square is black')
//   } 
// }
// // determine if the column begin with a white square 
// if(letterPosition === 'b' || letterPosition === 'd' || letterPosition === 'f'|| letterPosition === 'h'){
//   if(calcColor){
//   alert('The square is black')
// } else {
//   alert('The square is white')
//   }
// }