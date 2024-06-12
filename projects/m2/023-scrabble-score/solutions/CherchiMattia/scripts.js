const userString = prompt('Enter a word').toUpperCase()

const scrabblePoint = (str) => {

    str = str.match(/([\w])/g).join('');

    const scrabble = {
        1: ['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T', 'U'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z'],
    }

    let score = 0;
    for (let i = 0; i < str.length; i++) {
        for (let key in scrabble) {
            if (scrabble[key].includes(str[i])) {
                score += parseInt(key);
            }
        }
    }


    return score;
}

alert(`the score of the word ${userString} is: ${scrabblePoint(userString)}`);