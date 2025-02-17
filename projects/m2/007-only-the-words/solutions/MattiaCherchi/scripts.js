const marks = [",", ".", "?", "-", "_", " ’ ", " ' ", "!", ":", ";"];

const userString = prompt('Enter a string');

const onlyTheWords = (string) => {
    const words = string.split(' ');
    const newString = [];

    for (let item of words) {

        if (marks.includes(item.at(0))) {

            item = item.replace(item.at(0), '');
            newString.push(item);

        } else if (marks.includes(item.at(-1))) {

            item = item.replace(item.at(-1), '');
            newString.push(item);

        } else {
            newString.push(item);
        }

    };

    return newString.join(' ')
}

alert(onlyTheWords(userString));