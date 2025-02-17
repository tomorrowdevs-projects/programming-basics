let number = Number(prompt('Enter a positive integer number'));

function properDivisors (num){
    const result = [];
    for (i=2; i <= num; i++){
        if(num % i === 0) result.push(num / i);
    }
    return result;
};

if(/^[0-9]+$/.test(number)) alert(properDivisors(number).join(' - '));
else alert('You have entered the wrong value');