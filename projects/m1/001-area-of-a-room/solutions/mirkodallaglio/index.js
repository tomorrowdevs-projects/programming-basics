
let roomWidth = 0;
let roomLenght = 0;
let roomArea = 0;

function isNumber (i){
    if(i === '' || i === null){
        return false;
    }

    let dotCorrection = i.replace(',', '.');
    let parFlo = parseFloat(dotCorrection);

    if(isNaN(dotCorrection)){
        return false;
    }

    if(i.length > parFlo.length){
        return false;
    }

    return parFlo;
};

do{
    roomWidth = isNumber(prompt('Calcolo area di una stanza', 'Scrivi la larghezza in metri'));
    roomLenght = isNumber(prompt('Calcolo area di una stanza', 'Scrivi la lunghezza in metri'));

    if (roomLenght && roomWidth){
        roomArea =roomLenght * roomWidth;
        alert(`l'area della stanza è ${roomArea.toFixed(1)} metri quadrati`);
    }else{
        alert('Qualcosa è andato storto, non hai inserito correttamente uno o più numeri... riprova');
    };
}
while(roomArea === 0);


