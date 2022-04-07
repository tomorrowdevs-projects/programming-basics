// Translate English in Pig Latin 1. Create a function that change a text in a string with conditions (consonant as first letter/vowel as first letter) a. we have to consider a string a1. apply toLowerCase method and the regex b. transform the string in array c. verify the first letter for each value in the array d. modify the values with needed conditions e. transform back the array in a string with changes applies 2. Create an input and uniform that to lower case and no marks 3. Display the translated text

//creating the function
function translator(string, consonant, vowel) {
    let txt = '';                                  // creating an empty string where put the result
    const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = string.replace(regex, '');         // removing all the punctuation marks and converting to lower case 
    string = result.toLowerCase();
    array = string.split(' ');
    array.forEach(verifyLet)                           // once converting the string in array I verify each value
    function verifyLet(value) {
        if (value.startsWith('a' || 'e' || 'i' || 'o' || 'u')) {        // starting with vowel
            txt += value + 'way '
        } else {                                                        //and starting with consonant
            part = value.slice(0, 1)                                    
            secPart = value.slice(1,)
            txt += secPart + part + 'ay '
        }
    }
    console.log(txt)
    return txt
}

let text = prompt('Write whatever you want')

alert('Here the translation in Pig Latin: ' + translator(text))