function perfectNumbers(n){
    let count = 0;
    for (i=0;i<n;i++){
        if(n%i=== 0 ){
            count+= i
        }
        
    }
    return count === n;
}

function findPerfectNumber(start,end){
    const newPerfectNumbers = [];
    for (let i = start; i<= end; i++){
        if(perfectNumbers(i)){
            newPerfectNumbers.push(i)
        }
    }
    return `The perfect numbers from ${start} to ${end} are ${newPerfectNumbers}`
}

const newPerfectNumbers = findPerfectNumber(1, 10000);
console.log(newPerfectNumbers);