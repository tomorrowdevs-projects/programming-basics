/*--------------------------------------- MY BEST SOLUTION ------------------------------------------------*/
/*I reduced the lines of code by checking the input value with a final "else". RegExp may not be necessary.*/

let age;
let charge;
let totalCharge = 0;
    
while (age != " ") {
    age = prompt("Insert the age of a guess, enter a blank line if there are no more guests in the group");

    if (age <= 2) {
    charge = 0;
    } else if (age >= 3 && age <= 12) {
    charge = 14.00;
    } else if (age >= 65) {
    charge = 18.00
    } else if (age > 12 && age < 65) {
    charge = 23.00;
    } else {
    alert("Invalid Entry!")
    charge = 0;
    }
    totalCharge += charge;
}
alert("The admission cost for the group is: $ " + totalCharge.toFixed(2));

/* 
MY FIRST SOLUTION: 
I used two different RegExp to verify that the first age entered wasn't a blank line. 
After trying the second solution, I realized that it wasn't so necessary because 
if the user insert a blank line as first entry the alert is $ 0.00 that is not completely wrong!
*/

let age;
let charge;
let totalCharge = 0;
let onlyNumbers = /^[0-9]+$/;
let onlyNumbersBlank = /^[0-9 ]+$/;
    
age = prompt("Insert the age of the first guess");

if (!onlyNumbers.test(age)) {
alert ("Invalid Entry!");  

} else {
    if (age <= 2) {
    charge = 0;
    } else if (age >= 3 && age <= 12) {
    charge = 14.00;
    } else if (age >= 65) {
    charge = 18.00
    } else {
    charge = 23.00;
    }
    totalCharge = charge;
    
    while (age != " ") {
        age = prompt("Insert the age of a guess, enter a blank line if there are no more guests in the group");

        if (!onlyNumbersBlank.test(age)) {
        alert("Invalid Entry!");  
        
        } else {
            
            if (age <= 2) {
            charge = 0;
            } else if (age >= 3 && age <= 12) {
            charge = 14.00;
            } else if (age >= 65) {
            charge = 18.00
            } else {
            charge = 23.00;
            }
            totalCharge += charge;   
        }  
    }
    alert("The admission cost for the group is: $ " + totalCharge.toFixed(2));
}

