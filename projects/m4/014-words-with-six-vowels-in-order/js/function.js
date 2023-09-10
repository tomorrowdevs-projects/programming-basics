function getWords(arr){
    const regex = /.*a.*e.*i.*o.*u.*y/i;
    const result = arr.filter((item) => item.match(regex)).join(' - ')
    return result
}

function printWord(arr){
    if(arr.length > 0){
      console.log(`\nthe words that contain all the vowels in order are:\n${arr} \n`);
    }else{
     console.log(`\nthere are no words in the file (${dataset}) that contain all the vowels in order\n`)
    }
}

module.exports = {getWords, printWord};