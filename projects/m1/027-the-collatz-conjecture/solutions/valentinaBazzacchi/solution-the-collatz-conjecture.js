while (true) {  
   // The instruction within the first while must be repeated only when the sequence of numbers (increased in the second while) ending with 1. 
   let n = +prompt("Enter a positive integer");
   // Declare an array variable for collect the numbers with .push()
   let seq = [n];
   // Condition to exit the program
   if (n <= 0) break;
      // Ending condition: the sequence stops when "n" become 1 trought the following conditions and operations
      while (n != 1) {
      
         if (n % 2 == 0) { 
         n = Math.floor(n / 2);
         seq.push(n);

         } else {
         n = (n * 3) + 1;
         seq.push(n);
         }
      } // End first while 
/* 
Turn array into string with one spaces between each number. 
This instruction must be placed outside the second loop for display a complete sequence.   
*/
alert(seq.join(" "));  
   
} // End second while