const readFile = require(`./file_read`);
const fs = require(`fs`);

function getPassword (array) {

    for (i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    };

    if (array[0].length + array[1].length >= 8 && array[0].length + array[1].length <= 10) {
        console.log(`Your new password is: ${array[0] + array[1]}`);
        return;
    };

    return getPassword(array.splice(2));
};

const getList = string => {

    const stringArray = string.match(/\b(\w+)\b/g);
    const filteredArray = [];

    stringArray.forEach(element => {
        if (element.length >= 3 && element.length <= 7) filteredArray.push(element.charAt(0).toUpperCase() + element.slice(1));
    });

    return filteredArray;
};

readFile(`text1.txt`)
.then((data) => getPassword(getList(data)))
.catch((err) => console.log(err));