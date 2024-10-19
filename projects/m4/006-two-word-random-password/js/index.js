const { readFile } = require('fs/promises');

const filePath = './sample_file.txt';

const getWord = (allTheWordsFile) => {
    let word = '';
    while (word.length < 3 || word.length > 7) {
        const randomIndex = Math.floor(Math.random() * allTheWordsFile.length);
        word = allTheWordsFile[randomIndex];
        // console.log(word);
    }
    // console.log(word.length);
    // return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
};

const getPassword = (allTheWordsFile, firstWord) => {
    // Io ottengo una password, che ha dei caratteri da 3 a 7. Firstword.length.
    const firstWordLength = firstWord.length;
    // So che la lunghezza della password generata deve essere compresa tra 8 e 10;
    const minLength = 8;
    const maxLength = 10;
    // Genero reiterando la seconda password e vedere se, la somma con firstWordLength è comprezza tra le due lunghezze
    let sumPassword = 0;
    let secondWord = 0;
    while (sumPassword < minLength || sumPassword > maxLength) {
        secondWord = getWord(allTheWordsFile);
        const secondWordLength = secondWord.length;
        sumPassword = firstWordLength + secondWord.length;
    }

    return firstWord + secondWord;
};

const generatePasswordFromFile = async (filePath) => {
    const data = await readFile(filePath);
    const allTheWordsFile = data
        .toString()
        .replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~(),' ', \r\n]/g, ' ') // Remove all characters that are not letters
        .split(' ')
        .filter((element) => element !== '');
    // readFile(filePath)
    // .then((data) => {
    // Don't consider the empty space

    // Pick two random words from the file

    const firstWord = getWord(allTheWordsFile);
    // console.log(firstWord);
    const twoWordRandomPassword = getPassword(allTheWordsFile, firstWord);
    return twoWordRandomPassword;
};

generatePasswordFromFile(filePath)
    .then((password) => console.log(password))
    .catch((error) => console.log('Errore'));
// const password = await generatePasswordFromFile(filePath);
