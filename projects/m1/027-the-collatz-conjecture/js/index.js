let n = 1;
n = prompt('enter a number');
while (n > 1)  { 
   
   if (n % 2 == 0) {
  n = n / 2;

} else {
    n = (n * 3) + 1;  
}

  if(n <= 0) {
    break;
    
  }
  
  console.log(n); //put the consol.log at the end of the loop
}  