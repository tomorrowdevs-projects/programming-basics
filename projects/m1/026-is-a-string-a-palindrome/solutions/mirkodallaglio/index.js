let word = prompt('Write a word');
let reversedWord = '';

if(/^[a-zA-Z]+$/.test(word)) {
    for(i = word.length-1; i >= 0; i--){
        reversedWord += word[i];
    };

    if( reversedWord === word) alert(`${word} is a palindrome.`)
    else alert(`${word} isn't a palindrome`)

}else alert('You were wrong, you have to write one word');