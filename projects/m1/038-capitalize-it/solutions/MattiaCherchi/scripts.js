const userString = prompt('enter a string');
let newString;
const emptySpace = /\s/

function upperCaseString(string) {
    newString = string.charAt(0).toUpperCase() + string.slice(1)
    for (let i = 0; i < string.length; i++) {
        if (string[i] == '!' ||
            string[i] == '.' ||
            string[i] == '?'
        ) {
            while (i < string.length) {
                if (emptySpace.test(string[i + 1])) {
                    i++
                } else {
                    break;
                }
            }
            newString = newString.slice(0, i + 1) + string.charAt(i + 1).toUpperCase() + string.slice(i + 2);
        } else if (string[i] == 'i' && string[i - 1] == ' ' &&
            (string[i + 1] == ' ' || string[i + 1] == '?' || string[i + 1] == '!' ||
                string[i + 1] == '.' || string[i + 1] == '\'')
        ) {
            newString = newString.slice(0, i) + string.charAt(i).toUpperCase() + string.slice(i + 1);
        }
    }
    return newString
}

alert(upperCaseString(userString));