

// avarage

//breaking down each  numbers in string formats into an array 
let userNumbers = prompt('Please Insert a collection of Numbers ending with zero').split("");

//sum each numbers
let sumNumbers = 0;

//looping each number in the array and summing all of them

for (let i = 0; i < userNumbers.length; i++) {
    sumNumbers += +userNumbers[i];
    }

    // Math average formula
 let averageNum = sumNumbers / (userNumbers.length-1);

 //using Math.floor() method to round down the number to the nearest intiger
 averageNum = Math.floor(averageNum);

   //if the first number is 0 alert error 
if(userNumbers[0] === '0' ){
    alert('Note: please insert a number zero only at the end to finish the operation');
}else{
    alert(`The average is: ${averageNum}`);  
}