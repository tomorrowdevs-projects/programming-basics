function replaceWord(string, arr){
    let replString = string;
    arr.forEach(item => {
      // replString = replString.replace(new RegExp(item, 'g'),'*'.repeat(item.length));
      replString = replString.replaceAll(item,'*'.repeat(item.length));
    });
    return replString;
}

module.exports = replaceWord;