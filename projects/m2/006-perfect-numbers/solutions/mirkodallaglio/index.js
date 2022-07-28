function properDivisors (num){
    const result = [];
    for (i=1; i < num; i++){
        if(num % i === 0) result.push(num / i);
    }
    return result;
};