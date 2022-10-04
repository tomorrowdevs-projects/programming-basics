const string = prompt('Enter a string');
const width = parseInt(prompt('Enter a width of the window'));

function newString(string, width) {
    let newString = '';
    if (string.length >= width) {
        newString = string;
    } else {
        let space = '';
        const lengthSpace = ((width - string.length) / 2);
        for (let i = 0; i < lengthSpace; i++) {
            space += '-'
        }
        newString = space + string + space
    }
    return newString
}

console.log(newString(string, width));
