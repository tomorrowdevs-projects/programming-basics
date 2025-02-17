
// parity bids

/* 
AA parity bit is a simple mechanism for detecting errors in data transmitted over an unreliable connection such as a telephone line. The basic idea is that an additional bit is transmitted after each group of 8 bits so that a single bit error in the transmission can be detected. Parity bits can be computed for either even parity or odd parity. If even parity is selected then the parity bit that is transmitted is chosen so that the total number of one bits transmitted (8 bits of data plus the parity bit) is even. When odd parity is selected the parity bit is chosen so that the total number of one bits transmitted is odd.

Write a program that computes the parity bit for groups of 8 bits entered by the user using even parity. Your program should read strings containing 8 bits until the user enters a blank line. After each string is entered by the user your program should display a clear message indicating whether the parity bit should be 0 or 1. Display an appropriate error message if the user enters something other than 8 bits.

Hint: You should read the input from the user as a string. Then you can use the count method to help you determine the number of zeros and ones in the string. Information about the count method is available online.
 */
 
// First Version: con un while loop

let user_Digit;

let all_inputs = 0;

  while (user_Digit != '') {
  
  user_Digit = prompt('Please type a group of 8 bits');

  const total_One = user_Digit.match(/1/g);

  all_inputs = parseFloat(total_One.length );
 
  if (user_Digit.length > 8) {

    alert('Error: please type 8 bits');

    break;
  }  


  if (all_inputs % 2 === 0) {

    alert(user_Digit + ' - 0 parity even');
    
  } else {

    alert(user_Digit + ' - 1 parity even');
  
  } 
  
}  


// Second version: con un for loop

let user_Digit1;

let all_inputs1 = 0;


  
  user_Digit1 = prompt('Please type a group of 8 bits');

  for(let i= 0; i<=user_Digit1.length -1; i++){
  
    if (user_Digit1.length > 8) {

      alert('Error: please type 8 bits');
  
      break;
    }  


    if(user_Digit1[i] === '1'){

        all_inputs1+=1;

        
      }

  }

  

  if (all_inputs1 % 2 === 0) {

   

    alert(user_Digit1 + ' - 0 parity even');
    
  } else {
     

    alert(user_Digit1 + ' - 1 parity even');
  
  } 

  


  

 

 
  





  
