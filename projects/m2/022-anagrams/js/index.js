let userWord = prompt("Enter the word:").toUpperCase();
let userWordBis = prompt("Enter another word:").toUpperCase();

for(let i = 0; i < userWord.length; i++){
   for(let j = 0 ; j < userWordBis.length; j++){
    if(userWord[i]=== " " || userWordBis[j] === " "){
       alert("enter the words without the spaces");
       break;
    }
}
location.reload()
}


function anagrams(str1,str2){

    let arrayStr1 = str1.split("");
    let arrayStr2 = str2.split("");

    if(arrayStr1.sort().join("") === arrayStr2.sort().join("")){
        console.log(`the word ${str1} is the anagram of the word ${str2}`)
    } else{
        console.log(`the words between them are not anagrams`)
    }
};

anagrams(userWord,userWordBis);