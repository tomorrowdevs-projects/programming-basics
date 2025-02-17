function removeOutliers(arr, n){
    arr = arr.sort();
    arr.splice((arr.length - n), n);
    arr.splice(0, n);
    return arr;
}

let a = 1;
let arr = [];
let n = -1;

while(a != "t"){
    a = prompt('Insert number, for terminate list of numbers insert "t"');
    if(a != "t"){
        a = Number(a);
        arr.push(a);
    }
}

n = prompt("Insert the amount of outliers to eliminate");
n = Number(n);

while(!Number.isInteger(n) || n < 0){
    n = prompt("Please, insert non-negative integer");
    n = Number(n);
}


let res = removeOutliers(arr, n);

console.log(res);