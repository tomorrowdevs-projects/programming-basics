function getLists(data){

    const result = data.split(/\W+/g);
    const rulesList = new Set();
    const exceptionList= new Set();
    
    for(word of result){
        if(word.includes('ie')){
            (word[word.indexOf('ie') - 1]  !== 'c' ) ? rulesList.add(word) : exceptionList.add(word);
        }else if(word.includes('ei')){
            (word[word.indexOf('ei') - 1] == 'c') ? rulesList.add(word) : exceptionList.add(word);
        }
    
    }
   
    return {rulesList , exceptionList}
}

module.exports = getLists;