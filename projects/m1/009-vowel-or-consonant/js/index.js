
let letterInput = prompt("Please, enter a letter:");

if  (letterInput.match(/^[a-zA-Z]/) && letterInput.length == 1) {

    switch (letterInput) {
        case "a" :
        case "e" :
        case "i" :
        case "o" :
        case "u" :
            alert("The letter you entered (" + letterInput + ") is a vowel!");
            break;
        case "y" :
            alert("'Y' sometimes is a vowel, and sometimes is a consonant!")
            break;
        default :
            alert("The letter you entered (" + letterInput + ") is a consonant!");
            break;
    }

} else {

    alert("You can't enter a number or a symbol. And remeber you can enter only one letter at a time!");
    location.reload();

    }