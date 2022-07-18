let result = [];
const last3Equal = array => array.every( el => el === array[0]);
let rndmNumber = 0;
let phrase = '';
let avarage = 0;

for(i=0; i < 10; i++){
    result = [];
    while(!(last3Equal(result.slice(-3)) && result.length >= 3)){
        rndmNumber = Math.floor(Math.random() * 10);
        if(rndmNumber >= 0 && rndmNumber <=4) result.push('H')
        else result.push('T')
    }
    avarage += result.length;
    phrase += `${result.join(' ')}   (${result.length} flips)\n`;
};

alert (`${phrase}\nOn average, ${avarage/= 10} flips were needed.`);