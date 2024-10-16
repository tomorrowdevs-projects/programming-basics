const { readFile } = require('fs/promises');

const filePath = './example01.txt';

readFile(filePath)
    .then((data) => {
        // Transformed the string into an array first and then into a set to eliminate duplicates
        const wordsTextFile = new Set(data.toString().split(' '));

        // Converting the set back to an array that now contains no duplicates
        const wordsText = [...wordsTextFile];

        // Searching for words with the diphthongs ie and ei and concatenating them into a single array
        const wordsWithEi = wordsText.filter((word) => word.includes('ei'));
        const wordsWithIe = wordsText.filter((word) => word.includes('ie'));

        const weirdWords = wordsWithEi.concat(wordsWithIe);

        // Arrays with words without diphthongs ie and ei
        const normalWords = wordsText.filter(
            (word) => !word.includes('ie') && !word.includes('ei')
        );

        console.log(
            `The text contains a total of ${weirdWords.length} words with diphthongs 'ie' and 'ie'. Text contains a total of ${normalWords.length} words without the diphthongs 'ie' and 'ie'`
        );
    })
    .catch((error) => {
        console.log('The program is unable to open the file you indicated');
    });
