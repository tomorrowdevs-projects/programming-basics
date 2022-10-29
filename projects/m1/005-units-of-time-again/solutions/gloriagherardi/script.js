let seconds = prompt('Inserisci i secondi da calcolare');


const secondTotal = [86400, 3600, 60];
const arrayTime = [0, 0, 0];

for (let i = 0; i < secondTotal.length; i++) {
    arrayTime[i] = parseInt(seconds/secondTotal[i]);
    console.log(arrayTime[i] , secondTotal[i])
    seconds = seconds - (secondTotal[i] * arrayTime[i]);

}

alert('I giorni calcolati sono ' + arrayTime[0] + '. Le ore sono: ' + arrayTime[1] + '. I minuti sono: ' 
+arrayTime[2] + '. E i secondi sono: '+ seconds + '.');