let letter = checkLetter(prompt('vowel or consonant?', 'Insert a letter'));

function checkLetter (i){
    if(i === '' || i === null || i.length > 1 || isNaN(i) === false){
        return false;
    };

    if(i.length === 1 && i.match(/[a-z]/i)){
        return i;
    };
};

switch (true){
    case letter === false:
        alert('Something went wrong, you entered the letter incorrectly ... try again');
        break;
    case letter === 'y':
        alert('sometimes y is a vowel and sometimes y is a consonant');
        break;
    case /[aeiou]/.test(letter):
        alert(`${letter} is a vowel`);
        break;
    default:
        alert(`${letter} is a consonant`);
        break;
};
