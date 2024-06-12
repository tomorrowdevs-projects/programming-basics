let phrase = (prompt('Enter a phrase'));

function capitalizeCorrection (str){
    let splitPhrase = str.trim().split(' ');
    let wordAfterCap = true;

    let arrResult = splitPhrase.map(elem =>{
        if (wordAfterCap || (elem === 'i' || elem.includes("i'") || elem.includes('i!') || elem.includes('i?') || elem.includes('i.'))) {
            wordAfterCap = (/[.!?]/.test(elem)) ? true : false;
            return elem.charAt(0).toUpperCase() + elem.slice(1);
        }else {
            wordAfterCap = (/[.!?]/.test(elem)) ? true : false;
            return elem;
        };
    });
    return arrResult.join(' ');
};

alert(`Your phrase:\n\n${phrase}\n\nCapitalize correction:\n\n${capitalizeCorrection(phrase)}`);