let humanYears = isNumber(prompt('Conversione età UMANO --> CANE', "Scrivi qui l'età umana"));
let dogYears = 0;

function isNumber (i){
    
    let parInt = parseInt(i);

    if(isNaN(parInt) || parInt === '' || parInt === null){
        return false;
    }
    if(i.length > parInt.toString().length){
        return false;
    }
    return parInt;
};

if(humanYears > 2){
    dogYears = (humanYears - 2) * 4 + 21;
}else{
    dogYears = humanYears * 10.5;
};

switch (true){
    case humanYears === false:
        alert('Qualcosa è andato storto, non hai inserito correttamente il numero... riprova');
        break;
    case humanYears <0:
        alert('Hai inserito un numero negativo !... riprova');
        break;
    case humanYears === 1:
        alert(`${humanYears} anno umano corrisponde a ${dogYears} anni canini`);
        break;
    case humanYears > 1:
        alert(`${humanYears} anni umani corrispondono a ${dogYears} anni canini`);
        break;
};
