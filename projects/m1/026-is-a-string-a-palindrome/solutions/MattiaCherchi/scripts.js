//IL PROGRAMMA FUNZIONA ANCHE CON LE FRASI PALINDROME 

let userString = prompt('enter a string to know if it is palindrome').toUpperCase();
let arrUserString = userString.split(' ').join('');
let reverseString = '';


    for(let i = arrUserString.length -1; i >= 0; i--){    
        reverseString += arrUserString[i];
    }
    
    if(arrUserString == reverseString){
        alert(`${userString} : is palindrome!`);

    }else{
        alert(`${userString} : isn't palindrome!`);

    }  



