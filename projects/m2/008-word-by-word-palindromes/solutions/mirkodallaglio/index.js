let string = prompt('Enter a string');

function removePunctuation (string){
    const mark = ['.',',','?','!','-','_',"'",':',';','"']
    const word = string.split(' ');
    word.forEach((element, index) => {
        let i = element.length;
        let cont = 0;
        while(i--){
           if(mark.some(el => element[i] === el)) cont++;
           else break;
        };
        word[index] = element.slice(0, element.length-cont);
        if(word[index] === '') word.splice(index, 1);
    });
    return word;
};

function checkArrEqual (arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;
};

const stringArr = removePunctuation(string);
let stringReverse = [].concat(stringArr).reverse();

if(checkArrEqual(stringArr , stringReverse)) alert(`${stringArr.join(' ')}\n${stringReverse.join(' ')}\n\n The string is a word by word palindrome.`);
else alert(`${stringArr.join(' ')}\n${stringReverse.join(' ')}\n\n The string is NOT a word by word palindrome.`);


