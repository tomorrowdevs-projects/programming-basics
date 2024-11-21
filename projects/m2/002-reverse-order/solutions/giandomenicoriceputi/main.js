let arr = [];
let test = 0;
let number;



while (number !== test) {
    number = parseInt(prompt("write your number:"))
    arr.push(number)
}

arr.sort( (a, b) => b - a )
arr.map(num => console.log(num))
