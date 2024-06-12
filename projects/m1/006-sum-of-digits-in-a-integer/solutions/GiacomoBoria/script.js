/*Develop a program that reads a four-digit integer from the user and displays the sum of its digits.
For example, if the user enters 3141 then your program should display 3+1+4+1=9.*/

// User input
const numberUserInput = prompt("Type a number of four-digits please", 0); 

// Controls limit character and condition
if (numberUserInput.length <= 4) { // Controls limit character

 // Convert string in numebr
    const firstNumbStr = Number(numberUserInput[0]);  
    const secondNumbStrNumber = Number(numberUserInput[1]); 
    const thirdNumbStrNumber = Number(numberUserInput[2]);
    const fourthNumbStrNumber = Number(numberUserInput[3]);
 // Sum
    const sumUserNumb = firstNumbStr + secondNumbStrNumber + thirdNumbStrNumber + fourthNumbStrNumber;
    
    alert(`The sum of the numbers entered \(${numberUserInput[0]}+${numberUserInput[1]}+${numberUserInput[2]}+${numberUserInput[3]}\) is ${sumUserNumb}`);
} else {
    alert("Sorry, the characters entered exceed four digits. \n Please try again.")
}
