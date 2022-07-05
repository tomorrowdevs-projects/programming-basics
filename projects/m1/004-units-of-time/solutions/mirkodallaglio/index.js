let days = isNumber(prompt('Calcolo totale secondi', 'Scrivi qui i giorni'));
let hours = isNumber(prompt('Calcolo totale secondi', 'Scrivi qui le ore'));
let minutes = isNumber(prompt('Calcolo totale secondi', 'Scrivi qui i minuti'));
let seconds = isNumber(prompt('Calcolo totale secondi', 'Scrivi qui i secondi'));

function isNumber (i){
    let parInt = parseInt(i);

    if(isNaN(parInt) || parInt === '' || parInt === null){
        return false;
    }

    if(i.length > parInt.length){
        return false;
    }

    return parInt;
};

function calculateSeconds (d, h, m, s){
    let totSeconds = d * 86400 + h * 3600 + m * 60 + s;
    return totSeconds
}
if (days || hours || minutes || seconds){
    alert(`In totale ci sono ${calculateSeconds(days, hours, minutes, seconds)} secondi`);
}else{
    alert('Qualcosa è andato storto, non hai inserito correttamente uno o più numeri... riprova');
}