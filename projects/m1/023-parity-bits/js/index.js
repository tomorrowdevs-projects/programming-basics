//parity bits

let userDigit;
let allIn = 0;


  while (userDigit != '') {
  
  userDigit = prompt('write a group of 8 bits');
const totZero = userDigit.match(/0/g);
const totOne = userDigit.match(/1/g);

  allIn = parseFloat(totOne.length );
 
  if (userDigit.length > 8) {
    alert('error');
    break;
  }  
    
  if (allIn % 2 === 0) {
    alert(userDigit + ' - 0 parity even');
    
  } else {
    alert(userDigit + ' - 1 parity even');
  
  } 
  
}   
  