// # Write out Numbers in English

// While the popularity of cheques as a payment method has diminished in recent years, some companies still issue them to pay employees or vendors. 
// The amount being paid normally appears on a cheque twice, with one occurrence written using digits, and the other occurrence written using English words. 

// Repeating the amount in two different forms makes it much more difficult for an unscrupulous employee or vendor
// to modify the amount on the cheque before depositing it.
// In this exercise, your task is to create a function that takes an integer between 0 and
// 999 as its only parameter, and returns a string containing the English words for that number. 

// For example, if the parameter to the function is 142 then your function should return “one hundred forty two”. 

// Use one or more dictionaries to implement your solution rather than large if/elif/else constructs. 
// Include a main program that reads an integer from the user and displays its value in English words.
// # Scrivi i numeri in inglese

// Anche se la popolarità degli assegni come metodo di pagamento è diminuita negli ultimi anni, alcune aziende li emettono ancora per pagare dipendenti o fornitori.
// L'importo da pagare normalmente appare sull'assegno due volte, con una occorrenza scritta utilizzando cifre e l'altra occorrenza scritta utilizzando parole inglesi.

// Ripetere l'importo in due forme diverse rende molto più difficile per un dipendente o venditore senza scrupoli
// per modificare l'importo dell'assegno prima di depositarlo.
// In questo esercizio il tuo compito è creare una funzione che accetta un numero intero compreso tra 0 e
// 999 come unico parametro e restituisce una stringa contenente le parole inglesi per quel numero.

// Ad esempio, se il parametro della funzione è 142, la funzione dovrebbe restituire "centoquarantadue".

// Utilizza uno o più dizionari per implementare la tua soluzione anziché grandi costrutti if/elif/else.
// Include un programma principale che legge un numero intero dall'utente e ne visualizza il valore in parole inglesi.

let userInputnumber = parseInt(prompt(`enter a number from 1 to 999 and you will have the conversion in letters`))


const dictionaryNumEng = {
    0: 'zero',
    1:'one',
    2: 'two', 
    3: 'three', 
    4: 'four ', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight', 
    9: 'nine', 
    10: 'ten', 
    11: 'eleven', 
    12: 'twelve ', 
    13: 'thirteen', 
    14: 'fourteen', 
    15: 'fifteen', 
    16: 'sixteen', 
    17: 'seventeen', 
    18: 'eighteen', 
    19: 'nineteen', 
    20: 'twenty', 
    30: 'thirty', 
    40: 'forty', 
    50: 'fifty', 
    60: 'sixty', 
    70: 'seventy', 
    80: 'eighty', 
    90: 'ninety'
}

function numberinEnglish(obj,number){
    let letterOfTheEnglish = [];
    const numberStr = number.toString();
    for(let i=0;i<numberStr.length;i++){
        letterOfTheEnglish.push(obj[numberStr[i]]) 
    }
    console.log(letterOfTheEnglish)
    if(number > 100 ){
        return (`${letterOfTheEnglish[0]} hundred ${obj[numberStr[1]*10]} ${letterOfTheEnglish[2]}`)      
    }    
    else if (numberStr.length===2){
        return (`${obj[numberStr[0]*10]} ${letterOfTheEnglish[1]}`) 
    } else if(numberStr.length===1){
        return letterOfTheEnglish.join("") 
    }
    return letterOfTheEnglish

}
console.log(numberinEnglish(dictionaryNumEng,userInputnumber))
