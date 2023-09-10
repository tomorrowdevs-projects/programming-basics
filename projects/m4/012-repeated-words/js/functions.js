function getLines(str){
    return str.toLowerCase().split("\n")
        .map(line=> line.replace(/[^a-zA-Z0-9 ]/g, ""));
}

function getRepeatdWord(arr){
    let str = '';
    const counts = {}
    for (let i = 0; i < arr.length; i++) {
    const word = arr[i].split(/\W+/).filter(Boolean);
   
        for (let j = 0; j < word.length; j++) {
            if (word[j] == word[j +1]) {
                if(!counts[word[j]]){
                    counts[word[j]] = {count: 2, line: i + 1}
                }else{
                    counts[word[j]].count +=1; 
                }
            }   
        }     
    }
    for (const word in counts) {
        if (counts[word].count > 1)  
        str +=  `The word: "${word}" is repeated ${counts[word].count} times in line ${counts[word].line}\n`   
    }
   return str;
}


module.exports = {getLines , getRepeatdWord};
