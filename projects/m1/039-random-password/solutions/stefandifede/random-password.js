//a function to generate a random number between a specific range
let randomNumber;
function generateRandom(min, max) {
    let difference = max - min;
    randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * difference);
    randomNumber = randomNumber + min;
}

//initializing an empty array
let passwordArray = [];

function randomPassword() {
    generateRandom(33, 126) //pick a random number between 33-126
    let randomChar = String.fromCharCode(randomNumber);//pick the corresponding character in the ASCII table
    passwordArray.push(randomChar);  // push the character into the array
    generateRandom(7, 10) //generate a random number between 7-10 to randomize the password length 
    if (passwordArray.length < randomNumber) { //if password lenght is less than the random length repeat the function
        randomPassword()
    } else (alert(passwordArray.join(""))) //else show the result
}

randomPassword()