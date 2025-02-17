// declaration of variables of type number
let numbers;
// declaration of string variables
let messageFizzBuzz = "";

/* FOR loop to generate the numbers from " 1 to 100" 
    for each step of the cycle with the instruction " numbers = i + 1; " increments by " 1 " 
    to generate the next consecutive number */
for (let i = 0; i < 100; i++) {
    numbers = i + 1;

    /* IF condition which determines whether the number is divisible by " 3 " or " 5 " or both using 
       the operator " % " known as the " modulo operator " which restores the remainder of a division:
        1 ) number " DIVIDED 3 " and " DIVIDED 5 " message --> Fizz - Buzz 
        2 ) number " DIVISED 3 " message --> Fizz 
        3 ) number " DIVISED 5 " message --> Buzz
        4 ) remaining numbers message --> The player is winning
        - I store the response message in a variable and then visualise it at the end with a console.log */
    if (numbers % 3 && numbers % 5) {
        messageFizzBuzz = `The player for number " ${numbers} " pronounces the word --> Fizz - Buzz \u{1F44C}`;
    } else if (numbers % 3) {
        messageFizzBuzz = `The player for number " ${numbers} " pronounces the word --> Fizz        \u{1F448}`;
    } else if (numbers % 5) {
        messageFizzBuzz = `The player for number " ${numbers} " pronounces the word --> Buzz        \u{1F449}`;
    } else {
        messageFizzBuzz = `The player for number " ${numbers} " is the WINNNER OF THE GAME!         \u{1F3C5} \u{1F389}`;
    }
    // console.log of the variable " messageFizzBuzz " to display the result
    console.log("\n", messageFizzBuzz);
}