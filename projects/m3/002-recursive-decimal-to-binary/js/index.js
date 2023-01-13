const userNumber = parseInt(prompt('Enter a positive integer'));

let str = '';
const decToBin = (n) => {
    if(n === 0) return str += 0;
    if(n === 1) return str += 1;
    
    if(n > 1) decToBin(Math.floor(n/2));
    return  str += n%2 
      
}

console.log(decToBin(userNumber));