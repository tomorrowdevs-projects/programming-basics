function properDivisors(n){
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            console.log(i);
        }
    }
}


let n = Number(prompt("Please, insert a number"));
while(!Number.isInteger(n) || n < 0){
    n = Number(prompt("Please, insert non-negative integer"));  
}

properDivisors(n);