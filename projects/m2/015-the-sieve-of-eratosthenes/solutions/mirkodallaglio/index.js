let limit = Number(prompt('Calculation of prime numbers up to ..., you enter the limit'));

function primeNumber(limit){
    const num = [];
    let p = 2;

    for(i=0; i<=limit; i++) num.push(i); // I fill the array num with numbers from 0 to the limit
    num[1] = 0;

    while(num[p] < limit){
        if(num[p]) {                        
            for(i=p*2; i <= limit; i+= p){  //I set all multiples to 0
                num[i]=0
            };
        }
        p++;
    };
    return num.filter(e => e !==0);     //I remove all 0s from the array
};

console.time('Execution Time');
console.log(primeNumber(limit));
console.timeEnd('Execution Time');