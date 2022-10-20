const marks = [",", ".", "?", "-", "_", " ’ ", " ' ", "!", ":", ";"];

const userString = prompt('Enter a string').toLowerCase();

const onlyTheWords = (string) => {
    const words = string.split(' ');
    const newString = [];

    for (let item of words) {

        if (marks.includes(item.at(-1))) {

            item = item.replace(item.at(-1), '');
            newString.push(item);

        } else if (marks.includes(item.at(0))) {

            item = item.replace(item.at(0), '');
            newString.push(item);

        } else {
            newString.push(item);
        }

    };

    return newString;
}

const phrase = onlyTheWords(userString);



const isPalindrome = (string) => {
    if (string.join(' ') === string.reverse().join(' ')) {
        return true;
    } else {
        return false
    }
}

if (isPalindrome(phrase)) {
    alert(`the string:\n "${userString}"\n is a word by word palindrome`)
} else {
    alert(`the string:\n "${userString}"\n  isn't word by word palindrome`)
}