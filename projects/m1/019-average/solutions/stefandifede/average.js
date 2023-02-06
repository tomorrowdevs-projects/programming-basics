//initializing the array where inputs will be staged and the variable of the total 
const values = [];
let insertedValue= 0;
let total = 0;

//if user input is different from 0, stage the current value into the array and ask another input until a 0 is inserted.
function insertValue() {
    insertedValue = Math.floor(prompt("insert a value"));
    if (insertedValue != 0) {
     values.push(insertedValue);
     insertValue();
    } else if (insertedValue == 0 && values.length === 0) {
        alert("0 can't be the first value") //If 0 is the first input show an error
    }  else (calculatingAverage()) //when the user input is 0, calculate the average of all values inserted before.
 }
 insertValue()

//calculate the average of all values inserted
 function calculatingAverage() {
    for (let i = 0; i < values.length; i++) {
       total = total + values[i];
    }  const average = total / (values.length)
alert("The average is: " + average)
}   



