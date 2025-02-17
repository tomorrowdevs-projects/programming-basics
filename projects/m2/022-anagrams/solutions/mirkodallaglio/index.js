let word1 = prompt('Enter one or more word');
let word2 = prompt('Enter another words');

// compare two array, input two array, output boolean, true if two arr is equal
function arrEqual (arr1, arr2){
    return arr1.length === arr2.length &&
    arr1.every((el, index) => el === arr2[index])
};

//the function checks if word one is an anagram of the word two (contain all of the same letters, but in a different order), output boolean
function anagrams (word1, word2){
    const arr1 = word1.toLocaleLowerCase().split(/(?:| )+/).sort();
    const arr2 = word2.toLocaleLowerCase().split(/(?:| )+/).sort(); //word to array of single char, lowercase, without spaces, alphabetical order

    if(arrEqual(arr1, arr2)) return true;
    else return false;
};

if(/^[a-zA-Z\s]+$/.test(word1) && /^[a-zA-Z\s]+$/.test(word2)) 
    alert(`"${word1}"  and  "${word2}"  ${anagrams(word1, word2) ? 'are an anagrams' : "aren't an anagrams"}`);
else alert('Write only words (or spaces) without number and punctuation');