function perfectNumbers(n){
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(n % i === 0){
            sum += i 
        }
    }
    if(sum === n){
        return true;
    } else {
        return false;
    }
}


let n = Number(prompt("Please, insert a number"));
while(!Number.isInteger(n) || n < 0){
n = Number(prompt("Please, insert non-negative integer"));  
}
  
console.log(perfectNumbers(n));



function testProg(){
    for(let i = 1; i <= 10000; i++){
        if(perfectNumbers(i)){
            console.log(i);
        }
    }
}

testProg();