let maxNumber = Math.round(Math.random()*99)+1;
let display = maxNumber + " <-- First Number";
alert(display);
let currentNumber;
let counter = 0;

for (let i = 0; i < 100; i++) {
    currentNumber = Math.round(Math.random()*99)+1;
        
        if (currentNumber > maxNumber) {
        maxNumber = currentNumber;
        counter += 1;
        display = maxNumber + " <-- Update";
        alert("i = " + i + "\n" + display);
        
        } else {
        display = currentNumber;
        alert("i = " + i + "\n" + display);
        } // end else

} // end for  
alert("The maximum value found was: " + maxNumber + "\nThe maximum value was updated " + counter + " times");