// 016-reverse-lookup

const value =  3; //parseInt(prompt('Enter the key value you would like to find: ',0));
const dictionary = {'apple': 1, 'orange': 2, 'egg': 1, 'lemon': 3, 'chocolate': 1, 'pear': 5, 'banana': 3};

function reverseLookup(dictionaryInput, valueToSearch){

    const dictionaryLength = Object.keys(dictionaryInput).length;
    const valuesFinded = [];
    
    for (i=0 ; i < dictionaryLength ; i++){

        if (Object.values(dictionaryInput)[i] == valueToSearch){

            valuesFinded.push((Object.keys(dictionaryInput)[i]));
        } 
    }
    return valuesFinded
};

// altra soluzione più diretta:

function reverseLookup2(dictionaryInput2, valueToSearch2){
    return Object.keys(dictionaryInput2).filter(e => dictionaryInput2[e] == valueToSearch2)
};


console.log('Risultato finale: ' + reverseLookup(dictionary, value));
console.log('Risultato finale2: ' + reverseLookup2(dictionary, value));
