// 7# Next Day

// Write a program that **reads a date** from the user and **computes its immediate successor**.   
// The date will be **entered in numeric form with three separate input statements**: 
// - year   
// - month
// - day


// Example:    
// - if the user enters values that represent 2019-11-18 the next day is 2019-11-19.  
// - If the user enters values that represent 2019-11-30 the next day is 2019-12-01. 
// - If the user enters values that represent 2019-12-31 the next day is 2020-01-01. 


// Ensure that your program **works correctly for leap years**.

// 7# Il giorno dopo

// Scrivi un programma che **legge una data** dall'utente e **calcola il suo immediato successore**.
// La data verrà **inserita in forma numerica con tre istruzioni di input separate**:
// - anno
// - mese
// - giorno


// Esempio:
// - se l'utente immette valori che rappresentano 2019-11-18 il giorno successivo è 2019-11-19.
// - Se l'utente immette valori che rappresentano 2019-11-30, il giorno successivo è 2019-12-01.
// - Se l'utente immette valori che rappresentano 2019-12-31, il giorno successivo è 2020-01-01.


// Assicurati che il tuo programma **funzioni correttamente per gli anni bisestili**.

let inputYear = +prompt(`Enter the year:`);
let inputMonth = +prompt(`Enter the month:`);
let inputDay = +prompt(`Enter the day:`);



let monthsWith30Days = [4,6,9,11];
let monthsWith31Days = [1,3,5,7,8,10,12];
let monthFebruary = 2
let daysFebruaryLeap = [28,29]
for(i=0; i<=monthsWith30Days.length; i++){
    if(inputMonth == monthsWith30Days[i] && inputDay == 30){
        alert(`the date plus one day is ${inputYear}-${inputMonth + 1}-01`);
    } else if(inputMonth == monthsWith30Days[i] && inputDay < 30){
        alert(`the date plus one day is ${inputYear}-${inputMonth }-${inputDay + 1}`);
    } else if(inputMonth == monthsWith30Days[i] && inputDay > 30){
        alert(`the date is not valid`)
    }
}


for(x=0; x<=monthsWith31Days.length; x++){
    if(inputMonth == monthsWith31Days[6] && inputDay == 31){
        alert(`the date plus one day is ${inputYear + 1}-01-01`);
        break;
    } else if(inputMonth == monthsWith31Days[x] && inputDay == 31){
        alert(`the date plus one day is ${inputYear}-${inputMonth + 1}-01`);
    } else if(inputMonth == monthsWith31Days[x] && inputDay < 31){
        alert(`the date plus one day is ${inputYear}-${inputMonth }-${inputDay + 1}`);
    } else if(inputMonth == monthsWith31Days[x] && inputDay > 31){
        alert(`the date is not valid`)
    }
}

for(y=0; y<=daysFebruaryLeap.length; y++){
if((inputYear% 400 === 0) || ( (inputYear % 4 === 0) && (inputYear % 100 != 0) ) && (inputMonth == monthFebruary && inputDay == daysFebruaryLeap[0])){
    alert(`the date plus one day is ${inputYear}-${inputMonth}-${inputDay + 1}`);
    break;
} else if((inputYear% 400 === 0) || ( (inputYear % 4 === 0) && (inputYear % 100 != 0) ) && (inputMonth == monthFebruary && inputDay == daysFebruaryLeap[1])){
    alert(`the date plus one day is ${inputYear}-${inputMonth + 1}-01`);
    break;
}else if(inputMonth == monthFebruary && inputDay < 28){
    alert(`the date plus one day is ${inputYear}-${inputMonth}-${inputDay + 1}`);
    break;
}
}
