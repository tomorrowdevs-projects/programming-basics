// 015-the-sieve-of-eratosthenes

let limitNumber = parseInt(prompt('Enter the limit you want to find the prime numbers',0));

function primeNumbers(limit){

let numbers = [];

for (i=0 ; i < limit ; i++){

    if (i < 2){
        numbers.push(0);
    } else {
        for (y = 2; y < i ; y++){

            if (i % y == 0){

                numbers.push(0);
                break;
                               
            } else {

                numbers.push(i);
                break;
            };
        };
    };
};

numbers = numbers.filter(val => val != 0);
return numbers;
}

console.log (primeNumbers(limitNumber));