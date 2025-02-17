//vowel or consonant

let letter = prompt('please enter one letter: ','');

let isLetter = /^[a-z]+$/i.test(letter); //la i considera minuscole e maiuscole

while ((isLetter === false || (letter.length != 1)))  {
    let newLetter = prompt('Error! Please enter 1 single letter', '');
    letter = newLetter;
    isLetter = true;
};

let vowelMessage = 'The enterd letter ' + letter + ' is a vowel';
let yMessage = 'The enterd letter ' + letter + ' sometime is a vowel and othertime is a consonant'
let consonantMessage = 'The enterd letter ' + letter + ' is a consonant'

let vowelList = ['a' , 'e', 'i' ,'o', 'u'];

if (letter === 'y'){
    console.log(yMessage);

} else if (vowelList.indexOf(letter) !== -1) {
    console.log(vowelMessage);
    } else {
    console.log(consonantMessage);    
};
