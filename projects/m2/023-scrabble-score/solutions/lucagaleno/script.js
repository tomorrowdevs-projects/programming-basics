// 023-scrabble-score

const word = 'TAXIDRIVER'; 

//ogetto per l'assegnazione del punteggio
const scrabbleScore = {
    1: ['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T', 'U'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

// funzione per il calcolo del punteggio
function scoreWord(string) {

    // suddivido la parola in lettere
    function tokenizeString(toke){
        return toke.match(/([\w])/g); // solo lettere, se tutti (/(.)/g)
    };
    
    const singleLetters = tokenizeString(string);
    let score = [];

    // ciclo su tutte le lettere per trovare la key dell'oggetto = al punteggio
    singleLetters.forEach(element => {
            score.push(parseInt((Object.keys(scrabbleScore).find(key => scrabbleScore[key][(Object.values(scrabbleScore[key]).indexOf(element))] === element))))
    });
    score = score.reduce((a, b) => a + b ,0); //riducto l'array sommando tutti i suoi valori

    return score
};

console.log('The final score for ' + word + ' is: ' + scoreWord(word));