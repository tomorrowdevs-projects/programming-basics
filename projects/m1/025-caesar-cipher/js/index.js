
let messageInput = prompt('Please enter a message to encrypt: ');
let messageArray = messageInput.split('');
let numbersArray = [];
let numbersShiftedArray = [];
let messageShiftedArray = [];

messageArray.forEach(element => { 
    let convert = element.toUpperCase().codePointAt(0);
    numbersArray.push(convert);       
});

numbersArray.forEach(element => {
    if (element < 65) {
        numbersShiftedArray.push(element);  

    } else {
        numbersShiftedArray.push(element + 3);      
    }
})

numbersShiftedArray.forEach(element => {
    if (element >= 91 && element <= 93) {
        let convert = String.fromCharCode((element - 91) + 65);
        messageShiftedArray.push(convert);

    } else {
        let convert = String.fromCharCode(element);
        messageShiftedArray.push(convert);

    }

})


alert("Your encrypted message is: " + messageShiftedArray.join(''));