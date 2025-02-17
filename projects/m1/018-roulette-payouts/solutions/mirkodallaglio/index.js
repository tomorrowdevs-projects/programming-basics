let randomNumber = Math.floor(Math.random() * (37 - 0 + 1)) + 0;
let rouletteSpaces = {
    red: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    black: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33 ,35],
    green: [0, '00']
};
if(randomNumber === 37) randomNumber = '00';

let phrase = `The spin resulted in ${randomNumber}\nPay ${randomNumber}`;

if(!rouletteSpaces.green.includes(randomNumber)){
    if(rouletteSpaces.red.includes(randomNumber)) phrase += `\nPay red`;
        else phrase += `\nPay black`;
    if(randomNumber % 2 === 0) phrase += `\nPay even`;
        else phrase += `\nPay odd`;
    if(randomNumber > 0 && randomNumber <= 18) phrase += `\nPay 1 to 18`;
        else phrase += `\nPay 19 to 36`;
};

alert(phrase);