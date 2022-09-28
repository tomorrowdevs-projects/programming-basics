//018-text-messaging

const inputText = prompt('Enter the text to be written with the phon: ','').toUpperCase()

//creo i tasi del telefono
const phoneDictionary = {
    1: ['.',',','?','!',':'],
    2: ['A','B','C'],
    3: ['D','E','F'],
    4: ['G','H','I'],
    5: ['J','K','L'],
    6: ['M','N','O'],
    7: ['P','Q','R','S'],
    8: ['T','U','V'],
    9: ['W','X','Y','Z'],
    0: [' ']
};

//assegno ad un arrey ogni carattere di input
function tokenizeString(string){
    let tokenization = [];
    tokenization = string.split(/(.)/).filter(e => e != ''); 
    return tokenization;
}
//scrivo n volte un numero
function writeNumbers (number, times) {
    let nTimes = 0;
    let nNumber = '';
    while (nTimes != times) {
        nTimes = nTimes + 1;
        nNumber = nNumber  + number.toString();
    };
    return nNumber
}

// ciclo su tutto i caratteri dell'input
function finalNumber () {
    let messageInNumber = [];
    tokenizeString(inputText).forEach(element => {  
        // cerco la chiave dell'oggetto tramite l'indice del carattere in questione
        let findTheKey = Object.keys(phoneDictionary).find(key => phoneDictionary[key][(Object.values(phoneDictionary[key]).indexOf(element))] === element);
        // cerco l'indice del valore "carattere" e sommo 1 per avere il numero di volte che devo pressare il pulsante
        let findTheIndexPlus1 = Object.values(phoneDictionary[findTheKey]).indexOf(element) + 1;
        // creo array di numeri del telefono da pressare
        messageInNumber.push(writeNumbers(findTheKey,findTheIndexPlus1));
    });
    return (messageInNumber.toString()).replaceAll(',','');
};

console.log ('To write this message: ' + inputText);
console.log('You need to press this numbers: ' + finalNumber());
//console.info('This is the phone dictionary: ', phoneDictionary);



//APPUNTI E TEST
//let findTheKey = Object.keys(phoneDictionary).find(key => phoneDictionary[key][(Object.values(phoneDictionary[key]).indexOf('B'))] === 'B');
//let findTheIndexPlus1 = Object.values(phoneDictionary[findTheKey]).indexOf('B') + 1;

//console.log('Mappatura temp :  ' + messageInNumber);
//console.log('Test: ' + Object.values(phoneDictionary[2]))
//console.log('Key of dictionary :  ' + findTheKey);
//console.log('Index + 1 of array number: ' + findTheIndexPlus1);
//console.log('Message by number: ' + writeNumbers(findTheKey,findTheIndexPlus1));
