function properDivisors(n){
    const array =[];
    for(i=0;i<n-1;i++){
        if (n%i=== 0){
            array.push(i);
        }
    }
    return `Dividers of ${n} are: ${array}`
}

console.log(properDivisors(12));