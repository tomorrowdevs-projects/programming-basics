
let maximumInteger = 0;
let count = 0;
let countInteger = 0;

while (count < 100) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    if (randomNum > maximumInteger) {
maximumInteger = randomNum;
countInteger++
console.log(`${randomNum} <== Aggiornamento`);
    } else {
        console.log(randomNum)
    }
    count++;
}
console.log(`Il numero più alto trovato è ${maximumInteger}`);
console.log(`Il valore più alto è stato aggiornato ${countInteger} volte`);
