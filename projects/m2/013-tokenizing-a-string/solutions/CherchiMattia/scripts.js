const getTokenizingString = (str) => {
    let token = str.match(/[/*^()+-]|\d+/g);
    return token.join('\n')
}

const userString = prompt('Enter a mathematical expression');

alert(`the list of expression tokens: ${userString} \nare:\n ${getTokenizingString(userString)}`);