let userString = prompt('Enter the sentence to be translated in pig latin').toLowerCase();
const words = userString.split(' ')


const getTranslation = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let word = string;
    let consonant = '';

    if (vowels.includes(word[0])) {
        word = word + 'way';

    } else {

        let i = 0;
        while (!vowels.includes(word[i])) {
            consonant += word[i];
            i++
        }

        word = word.slice(consonant.length) + consonant + 'ay';
    }


    return alert(`the word:\n${string.toUpperCase()}\ntranslated into pig Latin is:\n ${word.toUpperCase()}`)
}

const getMessage = () => {
    for (let word of words) {
        getTranslation(word)
    }
}


if (/^[a-z]|[\s]+$/.test(userString)) {
    getMessage();
} else {
    alert('Error! Enter only words')
}

