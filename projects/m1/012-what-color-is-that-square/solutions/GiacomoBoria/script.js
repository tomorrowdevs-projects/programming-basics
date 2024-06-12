/*Write a program that reads a position from the user. 
Use an if statement to determine if the column begins with a black square or a white square. 
Then use modular arithmetic to report the color of the square in that row. 
For example, if the user enters a1 then your program should report that the square is black. 
If the user enters d5 then your program should report that the square is white. 
Your program may assume that a valid position will always be entered. 
It does not need to perform any error checking.*/

// User Input
const userPosition = prompt("Insert your position", 0).toLowerCase()

//Assign letter and number to two different variables
const letterPosition = userPosition[0]
const numberPosition = userPosition[1]

// Check user input
while (letterPosition <= "h" && numberPosition <= 8) {

//Variables of control
    const check = numberPosition % 2;

    //Condition and case if module = 0
    if (check === 0) {

        switch (letterPosition) {
        case "a":
        case "c":
        case "e":
        case "g":
        alert("The square where you are is colored white");
        break;

        case "b":
        case "d":
        case "f":
        case "h":
        alert("The square where you are is colored black");
        break;
        }
    
    //Condition and case if module != 0
    } else if (check != 0) {

        switch (letterPosition) {
        case "a":
        case "c":
        case "e":
        case "g":
        alert("The square where you are is colored Black");
        break; 

        case "b":
        case "d":
        case "f":
        case "h":
        alert("The square where you are is colored white");
        break;
        }
    }
break;
}

//If input error
if (letterPosition > "h" || numberPosition > 8) {
    alert("Enter a letter between A-H and a number between 1-8")
}

/* Short version
const userPosition = prompt("Insert your position", 0).toLowerCase()

//Assign letter and number to two different variables
const letterPosition = userPosition[0]
const numberPosition = userPosition[1]

while (letterPosition <= "h" && numberPosition <= 8) {
const check = numberPosition % 2;
    
    switch (letterPosition) {
        case "a":
        case "c":
        case "e":
        case "g":
            if (check === 0) {
                alert("The square where you are is colored white")
            } Else if {
                alert("The square where you are is colored black")
            }
        
        case "b":
        case "d":
        case "f":
        case "h":
            f (check === 0) {
                alert("The square where you are is colored black")
            } Else if {
                alert("The square where you are is colored white")
            }