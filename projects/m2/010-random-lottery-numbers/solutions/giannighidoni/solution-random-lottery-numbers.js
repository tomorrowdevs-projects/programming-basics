let num = [];

for(let i = 0; i < 6; i++){
    let a = Math.ceil(Math.random() * 49);
    while( num.includes(a)){
        a = Math.ceil(Math.random() * 49);
    } 
    num.push(a);
    
}

num.sort((a, b) => a - b);

console.log(num);