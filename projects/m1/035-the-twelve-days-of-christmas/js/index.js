
function numberToOrdinal(inputNumber) {
    let myString = "";
    
   
    if (inputNumber >= 1 && inputNumber <= 12) {
        switch (inputNumber) {
            
            case 1: myString = "Primo"; break;
            case 2: myString = "Secondo"; break;
            case 3: myString = "Terzo"; break;
            case 4: myString = "Quarto"; break;
            case 5: myString = "Quinto"; break;
            case 6: myString = "Sesto"; break;
            case 7: myString = "Settimo"; break;
            case 8: myString = "Ottavo"; break;
            case 9: myString = "Nono"; break;
            case 10: myString = "Decimo"; break;
            case 11: myString = "Undicesimo"; break;
            case 12: myString = "Dodicesimo"; break;
        }
    }
    
    return myString;
}


function songVerse(i) {
    let currentVerse = "";
    switch (i + 1) {
        case 1: currentVerse = `Una pernice in un pero`; break;
        case 2: currentVerse = `Due tortorelle e`; break;
        case 3: currentVerse = `Tre capponi francesi`; break;
        case 4: currentVerse = `Quattro tordi che cantano`; break;
        case 5: currentVerse = `Cinque anelli d'oro`; break;
        case 6: currentVerse = `Sei oche che stanno`; break;
        case 7: currentVerse = `Sette cigni che nuotano`; break;
        case 8: currentVerse = `Otto donzelle che mungono`; break;
        case 9: currentVerse = `Nove signore che danzano`; break;
        case 10: currentVerse = `Dieci signori che saltano`; break;
        case 11: currentVerse = `Undici suonatori di zampogna`; break;
        case 12: currentVerse = `Dodici tamburinari che battono`; break;
    }
    
    return currentVerse;
}

let verseString = "";
const outputElement = document.getElementById("output");


for (let i = 0; i < 12; i++) {
    const currentVerse = songVerse(i);
    const ordinal = numberToOrdinal(i + 1);
    
   
    verseString = currentVerse + "\n" + verseString;
    
    
    const initialVerse = `Il ${ordinal} giorno di Natale\nIl mio vero amore mi ha mandato`;
    
    
    outputElement.textContent += `${initialVerse}\n${verseString}\n`;
}
