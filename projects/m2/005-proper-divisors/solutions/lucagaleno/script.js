// 005-proper-divisor

function properDivisor(num){
const numList = [];
for (i=1 ; i <= num; i++){

    if (num % i === 0){
        numList.push(i);
    };
};
return numList;
};

let input = parseInt(prompt('Enter an integer to determine is proper divisors',''));

console.info('Those are the proper divisors for ' + input + ': ' + properDivisor(input));

