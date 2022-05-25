const phrase = "old boy run on the street";

const vowels =["a", "e", "i", "o", "u"];

let phraseWords = phrase.split(' ');

phraseWords.forEach((e, i) =>{
    if(vowels.includes(phraseWords[i][0])){
        phraseWords[i] = phraseWords[i] + 'way';
    } else {
        const wordSplit = e.split('');
        let cutChar = [];
        for(let ind = 0; ind < wordSplit.length; ind++){
            if(!vowels.includes(wordSplit[ind])){
               cutChar.push(wordSplit[ind]);          
            } else {
                break;
            }  
        }   	
        
        wordSplit.splice(0, cutChar.length);
        phraseWords[i] = wordSplit.join('') + cutChar.join('') + 'ay';
        
    }
   
})

console.log(phraseWords);