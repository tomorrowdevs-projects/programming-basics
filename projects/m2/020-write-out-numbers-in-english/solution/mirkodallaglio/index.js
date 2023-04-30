let number = prompt(' enter a number between 0 and 999');

//the function transforms numbers between 0 and 999 into English words, input a number entered as a string, output string

function numberToWord (number){
    const word = {  //all different words to write numbers except hundred
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 0: 'zero',
        10: 'ten', 11:'eleven', 12:'twelve', 13: 'thirteen',
        14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
        18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 
        40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 
        80: 'eighty', 90: 'ninety',
    };

    if(number in word) return word[number]; //if number is in the object
    else if(number.length === 2) return `${word[number[0]+0]} ${word[number[1]]}`;  //if the number is < 100 write the tens and the unit
    else if(number / 100 - number[0] === 0) return `${word[number[0]]} hundred`;    //if the number is 100, 200, 300, 400 etc..
    else if(Number(number.slice(1)) in word) return `${word[number[0]]} hundred ${word[Number(number.slice(1))]}`; //if the number without the hundreds is in object
    else return `${word[number[0]]} hundred ${word[number[1]+0]} ${word[number[2]]}`; // else write the hundreds, the tens and the unit
};

if(/^\d{1,3}$/.test(number)) alert(numberToWord(number));   //only number from 0 to 999
else alert('Only numbers from 0 to 999');
