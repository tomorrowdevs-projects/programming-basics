let rndmNumber = 0;
let biggest = [0];

for(i = 0; i < 100; i++){
    rndmNumber = Math.floor(Math.random() * 101);
    if (rndmNumber > biggest[biggest.length -1]){
        biggest.push(rndmNumber);
        console.log(biggest[biggest.length -1] + ' ==> Update');
    }else console.log(rndmNumber);
}

alert(`Max Value = ${biggest[biggest.length -1]}\nValue updated ${biggest.length -1} times.`)