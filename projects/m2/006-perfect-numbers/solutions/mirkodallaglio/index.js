function properDivisors (num){
    const result = [];
    for (i=2; i <= num; i++){
        if(num % i === 0) result.push(num / i);
    }
    return result;
};

function perfectNumber (number){
    const sumDivisors = properDivisors(number).reduce((a, b) => a + b, 0);
    if(sumDivisors === number) return true;
    else return false;
};

for(e=1; e <= 10000; e++){
    if(perfectNumber(e)) console.log(e);
}