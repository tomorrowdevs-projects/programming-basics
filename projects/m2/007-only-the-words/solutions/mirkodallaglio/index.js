let string = prompt('Enter a string');

function removePunctuation (string){
    const mark = ['.',',','?','!','-','_',"'",':',';']
    const word = string.split(' ');
    word.forEach((element, index) => {
        let i = element.length;
        let cont = 0;
        while(i--){
           if(mark.some(el => element[i] === el)) cont++;
           else break;
        };
        word[index] = element.slice(0, element.length-cont);
    });
    return word.join('\n');
};

alert(removePunctuation(string));